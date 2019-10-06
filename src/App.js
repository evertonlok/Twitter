import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import login from './pages/login'
import timeline from './pages/timeline'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={login} />
          <Route path='/timeline' component={timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
