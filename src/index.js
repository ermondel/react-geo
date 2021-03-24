import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import stores from '@redux/stores';
import Home from '@sections/Home/comp/Home';
import Location from '@sections/Location/comp/Location';
import Blog from '@sections/Blog/comp/Blog';
import Postcard from '@sections/Postcard/comp/Postcard';
import Podcasts from '@sections/Podcasts/comp/Podcasts';
import Books from '@sections/Books/comp/Books';
import Board from '@sections/Board/comp/Board';
import Weather from '@sections/Weather/comp/Weather';
import Posts from '@sections/Posts/comp/Posts';
import Widgets from '@sections/Widgets/comp/Widgets';
import NotFound from '@sections/NotFound/comp/NotFound';
import './style/index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(stores, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <div className='app'>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/location' exact component={Location} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/postcard' exact component={Postcard} />
          <Route path='/podcasts' exact component={Podcasts} />
          <Route path='/books' exact component={Books} />
          <Route path='/board' exact component={Board} />
          <Route path='/weather' exact component={Weather} />
          <Route path='/posts' component={Posts} />
          <Route path='/widgets' component={Widgets} />
          <Route path='*' component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
