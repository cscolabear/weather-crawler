import React from 'react';
import TabContentRowsComponent from './TabContentRowsComponent';


const TabContentComponent = (props) => {
  const { city } = props;

  return (
    <div className="tabs__tab-content nes-container is-rounded is-dark">
      <p className="tabs__tab-content__desc">
        {city.description}
        <a href={city.target_url} target="_blank" className="tab-desc-target-url" rel="noopener noreferrer">
          <span role="img" aria-label="hand-single-finger">👉</span>
        </a>
      </p>

      <TabContentRowsComponent allDay={city.all_day} />
    </div>
  );
};

export default TabContentComponent;
