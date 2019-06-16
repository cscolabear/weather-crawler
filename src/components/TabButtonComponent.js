import React from 'react';

const TabButtonComponent = (props) => {
  const { city } = props;

  return (
    <label htmlFor={city.id} className="tab-label" onClick={() => props.onClick(city.en_county_name)}>
      <input
        id={city.id}
        type="radio"
        name="tabs"
        value={city.en_county_name}
        defaultChecked={city.checked}
        className="nes-radio is-dark"
      />
      <span>{city.county}</span>
      <span className="en-county-name">/{city.en_county_name}</span>
    </label>
  );
};

export default TabButtonComponent;
