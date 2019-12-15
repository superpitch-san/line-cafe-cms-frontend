import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home, Products } from './pages';

import './App.scss';

import commonConstant from './common/commonConstant';

export default () => (
  <Router>
    <header className="App-header">
      <h3>Line Cafe CMS</h3>
    </header>
    <div className="App">
      <Switch>
        <Route sensitive strict exact path={commonConstant.pathHome} component={Home} />
        <Route sensitive strict exact path={commonConstant.pathProducts} component={Products} />
        <Route sensitive strict exact component={Home} />
      </Switch>
    </div>
  </Router>
);
