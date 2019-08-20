import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import Service from '../../services/service';

import {
  ListPage,
  LoginPage
} from '../pages';

import { ServiceProvider } from '../service-context';

import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  state = {
    service: new Service()
  };

  render() {

    return (
      <ErrorBoundry>
        <ServiceProvider value={this.state.service} >
          <Router>
            <div className="app">
              <Header />

              <Switch>
                <Route path="/" component={ListPage} />
                <Route path="/login" component={LoginPage} />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

            </div>
          </Router>
        </ServiceProvider>
      </ErrorBoundry>
    );
  }
}
