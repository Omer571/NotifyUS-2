// jshint esversion: 8

import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './components/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div>
        <Switch>
          <Route component={Home} exact path="/" />
          {/* <Route component={Login} path="/login" /> */}
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
          {/* <Route component={SignUp} path="/signup" /> */}
          {/* <Route component={Page404} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
