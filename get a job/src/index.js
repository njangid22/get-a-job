import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import FirmLogin from './views/firm-login'
import JobSeeker from './views/job-seeker'
import Application from './views/application'
import Home from './views/home'
import Register from './views/register'
import JobSeekerLogin from './views/job-seeker-login'
import JobSubmitted from './views/job-submitted'
import ApplicationSubmitted from './views/application-submitted'
import Firm from './views/firm'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={FirmLogin} exact path="/firm-login" />
        <Route component={JobSeeker} exact path="/job-seeker" />
        <Route component={Application} exact path="/application" />
        <Route component={Home} exact path="/" />
        <Route component={Register} exact path="/register" />
        <Route component={JobSeekerLogin} exact path="/job-seeker-login" />
        <Route component={JobSubmitted} exact path="/job-submitted" />
        <Route
          component={ApplicationSubmitted}
          exact
          path="/application-submitted"
        />
        <Route component={Firm} exact path="/firm" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
