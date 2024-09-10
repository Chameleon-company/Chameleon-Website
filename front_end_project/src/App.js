import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotificationComponent from './components/notificationComp/NotificationComponent';
import NotFoundPage from './pages/error404/404.js';
import Profile from './pages/profile/profile.js';
import Post from './pages/profile/post.js';
import Screen from './components/app/Screen.js';

const HomePage = lazy(() => import('./pages/homepage/Homepage'));
const Chatbot = lazy(() => import('./pages/Chatbot/Chatbot'));
const News = lazy(() => import('./pages/news/news'));
const Projects = lazy(() => import('./pages/projects/projects'));
const IotResources = lazy(() => import('./pages/resources/iotResources'));
const IotTechnologies = lazy(() => import('./pages/resources/iotTechnologies'));
const IotStatistics = lazy(() => import('./pages/resources/iotStatistics'));
const IotUpdates = lazy(() => import('./pages/resources/iotUpdates'));
const Login = lazy(() => import('./pages/login/login'));
const Signup = lazy(() => import('./pages/signup/signup'));
const ResetPassword = lazy(() => import('./pages/reset_password/reset_demo'));
const Support = lazy(() => import('./pages/support/support'));


function App () {
  // const rememberMe = localStorage.getItem('rememberMe') === 'true';
  // const status = sessionStorage.getItem('status') === 'logged in';
  // const session = rememberMe ? true : status;

  return (
    <>
      <Router>
        <NotificationComponent />

        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/home" component={Projects} />
              <Route path="/news" component={News} />
              <Route path="/chatbot" component={Chatbot} />
              <Route path="/projects" component={Projects} />
              <Route path="/iotResources" component={IotResources} />
              <Route path="/iotTechnologies" component={IotTechnologies} />
              <Route path="/iotStatistics" component={IotStatistics} />
              <Route path="/iotUpdates" component={IotUpdates} />
              <Route path="/profile" component={Profile} />
              <Route path="/posts/:id" component={Post} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={ResetPassword} />
              <Route path="/support" component={Support} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </Suspense>
      </Router >
    </>
  );
}

export default App;
