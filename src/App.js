import React, { Component } from 'react';
import FooterComponent from './components/FooterComponent';
import TabListComponent from './components/TabListComponent';
import TabComponent from './components/TabComponent';
import { data as Data, updated_at as updatedAt } from './data/data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      current: Object.keys(Data)[0] || 'Taipei City',
    };

    this.updatedAt = new Date(updatedAt).toString();
  }

  handleClick(cityName) {
    this.setState({
      current: cityName,
    });
  }

  renderTab() {
    const citys = Object.keys(this.state.data);
    const tabList = [];
    const tab = [];
    citys.forEach((city) => {
      const cityProps = this.state.data[city];
      if (!cityProps) return;

      cityProps.id = `tab-${cityProps.en_county_name}`;
      cityProps.hidden = cityProps.en_county_name !== this.state.current;

      tabList.push(
        <TabListComponent
          city={cityProps}
          onClick={cityName => this.handleClick(cityName)}
          key={`tabList-${city}`}
        />,
      );
      tab.push(<TabComponent city={cityProps} key={`tab-${city}`} />);
    });

    return (
      <div className="tab-container">
        <div className="tab-list">
          {tabList}
        </div>
        <div className="tabs">
          {tab}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>weather-crawler</h1>

        {this.renderTab()}
        <span className="mini right">
          {this.updatedAt}
        </span>

        <FooterComponent />
      </div>
    );
  }
}

export default App;
