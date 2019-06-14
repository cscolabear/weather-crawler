import React from 'react';
import TabColumnComponent from './TabColumnComponent';


const TabComponent = (props) => {
  const { city } = props;
  const hidden = city.hidden ? 'hidden' : '';

  return (
    <div className={`tabs__tab-content nes-container is-rounded is-dark ${hidden}`}>
      <p className="tabs__tab-content__desc">
        {city.description}
        <a href={city.target_url} target="_blank" className="tab-desc-target-url" rel="noopener noreferrer">
          <span role="img" aria-label="hand-single-finger">👉</span>
        </a>
      </p>
      <section className="tabs__tab-column">
        <TabColumnComponent allDay={city.all_day} />
      </section>
      <time dateTime={city.public_time} className="mini right">{city.public_time}</time>
    </div>
  );
};

export default TabComponent;
