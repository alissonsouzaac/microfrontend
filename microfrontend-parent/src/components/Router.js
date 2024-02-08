// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './../../../microfront-home/src/App';
import About from './../../../microfront-about/src/App';
import Header from './Header';
import Sidebar from './SideBar';

function AppRouter() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
