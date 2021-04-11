import React, { useState, useEffect, useRef } from 'react';
import { strIncludes } from '@lib/str';

const SearchForm = (props) => {
  return (
    <div className='dropdown-menu__search'>
      <input
        type='text'
        className='dropdown-menu__search-input'
        placeholder='search...'
        onChange={props.onQueryChange}
        value={props.query}
        tabIndex={0}
      />
    </div>
  );
};

const MenuItem = (props) => {
  if (props.query && !strIncludes(props.item.label, props.query)) {
    return null;
  }

  const isActive = props.activeValue === props.item.value;

  return (
    <li
      className={'dropdown-menu__option' + (isActive ? '--active' : '')}
      onClick={props.onItemClick}
      onKeyPress={props.onItemClick}
      tabIndex={0}
    >
      {props.item.label}
    </li>
  );
};

const MenuHeader = (props) => {
  return props.value ? (
    <button className='dropdown-menu__btn' onClick={props.onHeaderClick}>
      {props.value}
    </button>
  ) : (
    <button className='dropdown-menu__btn'>[EMPTY]</button>
  );
};

const OuterMenuLabel = (props) => {
  return props.enabled ? (
    <div className='dropdown-menu__outer-label'>{props.label || 'Select option'}</div>
  ) : null;
};

const MenuTitle = (props) => {
  const active = props.isActive ? '--active' : '';

  if (props.clickable) {
    return (
      <div
        className={'dropdown-menu__title-dynamic' + active}
        onClick={props.onMenuTitleClick}
      >
        <span>{props.value || 'Select option'}</span>
      </div>
    );
  } else {
    return (
      <div className={'dropdown-menu__title-static' + active}>
        <span>{props.value || 'Select option'}</span>
        <button
          className='dropdown-menu__btn-close'
          title='close'
          onClick={props.onCloseClick}
        >
          <span>close</span>
        </button>
      </div>
    );
  }
};

const MenuDescription = ({ value }) => {
  return value ? <div className='dropdown-menu__description'>{value}</div> : null;
};

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef();

  // closing the menu by clicking outside its boundaries
  useEffect(() => {
    const onBodyClick = (e) => !ref.current.contains(e.target) && setOpen(false);
    document.body.addEventListener('click', onBodyClick);
    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  const defaultOption = {
    label: props.label ? props.label : 'Select option',
    value: null,
  };

  const getActiveOption = () => {
    if (!props.options || !props.options.length) return { label: null, value: null };
    if (props.selected) return props.selected;
    if (props.defaultValue) {
      return (
        props.options.find((el) => el.value === props.defaultValue) || props.options[0]
      );
    }
    if (props.hasTitle) return defaultOption;
    return props.options[0];
  };

  const activeOption = getActiveOption();

  return (
    <div className='dropdown-menu' ref={ref}>
      <OuterMenuLabel label={props.label} enabled={props.outerLabel} />

      <div className='dropdown-menu__element'>
        <MenuHeader value={activeOption.label} onHeaderClick={() => setOpen(true)} />

        {open && (
          <div className='dropdown-menu__container'>
            {props.hasTitle && (
              <MenuTitle
                value={props.label}
                isActive={activeOption.value === null}
                clickable={props.clickableTitle}
                onMenuTitleClick={() => {
                  setOpen(false);
                  setSearch('');
                  props.onSelect(defaultOption);
                }}
                onCloseClick={() => {
                  setOpen(false);
                  setSearch('');
                }}
              />
            )}

            {props.withSearch && (
              <SearchForm
                query={search}
                onQueryChange={(e) => setSearch(e.target.value)}
              />
            )}

            <ul className='dropdown-menu__options'>
              {props.options.map((option) => (
                <MenuItem
                  key={option.value}
                  item={option}
                  query={search}
                  activeValue={activeOption.value}
                  onItemClick={() => {
                    setOpen(false);
                    setSearch('');
                    props.onSelect(option);
                  }}
                />
              ))}
            </ul>
          </div>
        )}
      </div>

      <MenuDescription value={props.description} />
    </div>
  );
};

export default DropdownMenu;
