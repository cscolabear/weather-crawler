import React from 'react';

const TabListComponent = (props) => {
  const { city } = props;
  const checked = !city.hidden;

  return (
    <label htmlFor={city.id} className="tab-list__tab-btn" onClick={() => props.onClick(city.en_county_name)}>
      <input id={city.id} type="radio" name="tabs" value={city.en_county_name} defaultChecked={checked} className="nes-radio is-dark" />
      <span>{city.county}</span>
      <span className="en-county-name"> / {city.en_county_name}</span>
    </label>
  );
};

export default TabListComponent;
