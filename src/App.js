import React, { Component } from 'react';
import FooterComponent from './components/FooterComponent';
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

  renderTabs() {
    const citys = Object.keys(this.state.data);
    const tabs = [];
    citys.forEach((city) => {
      const cityProps = this.state.data[city];
      if (!cityProps) return;

      cityProps.id = `tab-${cityProps.en_county_name}`;
      cityProps.checked = cityProps.en_county_name === this.state.current;
      cityProps.hidden = !cityProps.checked;

      tabs.push(
        <TabComponent
          key={`tab-${city}`}
          city={cityProps}
          onClick={cityName => this.handleClick(cityName)}
        />,
      );
    });

    return (
      <div className="tabs">
        {tabs}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>weather-crawler</h1>

        {this.renderTabs()}

        <span className="mini right">
          {this.updatedAt}
        </span>

        <FooterComponent />
      </div>
    );
  }
}

export default App;
