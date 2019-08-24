import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import HomeScreen from './screens/Home/HomeScreen.component';
import AboutScreen from './screens/About/AboutScreen.component';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <div>Header</div>
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
