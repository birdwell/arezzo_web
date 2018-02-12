import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import { Events } from './events';
import { Shopping } from './shopping';
import { Outdoors } from './outdoors';
import { Food } from './food';
import { Home } from './home';
import { Sights } from './sights';

const App = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Arezzo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/food" component={Food} />
      <Route path="/outdoors" component={Outdoors} />
      <Route path="/shopping" component={Shopping} />
      <Route path="/sights" component={Sights} />
    </div>
  </Router>
);


export default App;
