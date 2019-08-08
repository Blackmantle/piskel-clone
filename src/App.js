import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './screens/Header';
import LandingPage from './screens/LandingPage';
import PiskelCloneApp from './screens/PiskelCloneApp';

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <Router>
      <div className="App">
        <Header userInfo={userInfo} setUserInfo={setUserInfo} />
        <Switch>
          <Route
            path="/piskel-clone"
            render={props => <PiskelCloneApp {...props} userAccessToken={userInfo.accessToken} />}
          />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
