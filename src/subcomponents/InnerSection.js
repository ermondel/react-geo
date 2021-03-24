import React from 'react';

const InnerSection = (props) => {
  const title = 'React Platform';

  document.title = props.browserTabTitle ? `${title} | ${props.browserTabTitle}` : title;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default InnerSection;
