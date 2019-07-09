import React from 'react';
import PropTypes from 'prop-types';


function rainColor(rate) {
  if (rate > 60) {
    return 'nes-text is-primary';
  }

  return '';
}

function row(data, cityId, key) {
  return (
    <div className="tabs__tab-column-row" key={`${cityId}-${data.current_title[key]}`}>
      <h2>
        <span>{data.current_title[key]}</span>
        <span className="normal"> - {data.rainImg[key].alt}</span>
      </h2>
      <div className="tabs__tab-column-row-detail">
        <div className="two-col">
          <p>降雨機率 <span className={rainColor(data.rain[key])}>{data.rain[key]} %</span></p>
          <p className="">{data.temperature[key]} ˚C</p>
        </div>
        <div className="two-col-photo">
          <img src={data.rainImg[key].src} alt={data.rainImg[key].alt} />
        </div>
      </div>
    </div>
  );
}

const TabContentRowsComponent = (props) => {
  const { allDay, cityId } = props;

  const rows = [];
  allDay.current_title
    .forEach((data, key) => {
      rows.push(row(allDay, cityId, key));
    });

  return (
    <div className="tabs__tab-column">
      {rows}
    </div>
  );
};

TabContentRowsComponent.propTypes = {
  allDay: PropTypes.object.isRequired,
  cityId: PropTypes.string.isRequired,
};

export default TabContentRowsComponent;
