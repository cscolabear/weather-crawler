import React from 'react';
import PropTypes from 'prop-types';


const TabButtonComponent = (props) => {
  const { city } = props;
  const isChecked = city.checked ? 'is-checked' : '';

  return (
    <label
      ref={city.ref}
      className={`tab-label ${isChecked}`}
      onClick={() => props.onClick(city.id)}
    >
      <span>{city.county}</span>
      <span className="en-county-name">/{city.en_county_name}</span>
    </label>
  );
};

TabButtonComponent.propTypes = {
  city: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButtonComponent;
