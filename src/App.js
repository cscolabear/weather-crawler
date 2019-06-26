import React, { Component } from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import TabButtonComponent from './components/TabButtonComponent';
import TabContentComponent from './components/TabContentComponent';
import { data as Data, updated_at as updatedAt } from './data/data.json';
import { GetCityProp, IdGenerator } from './lib/Utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.default = 'taipei-city';
    this.state = {
      data: Data,
      current: this.default,
    };

    Object.keys(this.state.data)
      .forEach((city) => {
        this.state.data[city].ref = React.createRef();
      });

    this.updatedAt = new Date(updatedAt).toString();
  }

  setCurrent(cityId) {
    const targetCityId = cityId.length <= 0
      ? this.default
      : cityId;

    if (this.state.current === targetCityId) {
      return;
    }

    this.setState({ current: targetCityId });

    const { current } = this.state.data[targetCityId].ref;
    if (current && current.offsetTop) {
      window.setTimeout(() => {
        window.scrollTo({
          top: current.offsetTop,
          behavior: 'smooth',
        });
      }, 350);
    }
  }

  routeGenerator() {
    const routes = [];

    Object.keys(this.state.data)
      .forEach((city) => {
        const cityProps = GetCityProp(this.state.data[city], this.state.current);

        const linkComponent = <TabButtonComponent
          city={cityProps}
          onClick={cityName => this.setCurrent(cityName)}
        />;
        const contentComponent = ({ location }) => {
          const pathname = IdGenerator(location.pathname);
          this.setCurrent(pathname);
          return (<TabContentComponent city={cityProps} />);
        };
        const route = {
          link: {
            to: `/${cityProps.id}`,
            view: linkComponent,
          },
          content: {
            path: `/${cityProps.id}`,
            view: contentComponent,
          },
        };

        routes.push(route);
      });

    return routes;
  }

  render() {
    const routes = this.routeGenerator();

    return (
      <HashRouter basename="/">
        <div className="App">
          <h1>weather-crawler</h1>

          <div className="tabs">
            {routes.map((route, index) => (
              <React.Fragment key={`route-${route.link.to}`}>
                <Link to={route.link.to}>{route.link.view}</Link>
                {index === 0
                  ? <Route exact path='/' component={routes[index].content.view} />
                  : ''}
                <Route path={route.content.path} component={route.content.view} />
              </React.Fragment>
            ))}

          </div>

          <span className="mini right">
            {this.updatedAt}
          </span>

          <FooterComponent />
        </div>
      </HashRouter>
    );
  }
}

export default App;
