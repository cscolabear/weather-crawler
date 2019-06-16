import React from 'react';
import TabButtonComponent from './TabButtonComponent';
import TabContentComponent from './TabContentComponent';


const TabComponent = (props) => {
  const { city } = props;

  return (
    <React.Fragment>
      <TabButtonComponent
        city={city}
        onClick={props.onClick}
      />

      <TabContentComponent city={city} />
    </React.Fragment>
  );
};

export default TabComponent;
