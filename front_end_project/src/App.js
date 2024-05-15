import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotificationComponent from "./components/notificationComp/NotificationComponent";
import Screen from './components/app/Screen';
import NotFoundPage from "./pages/error404/404.js";
import Profile from './pages/profile/profile.js';


const HomePage = lazy(() => import("./pages/homepage/Homepage"));
const Chatbot = lazy(() => import("./pages/Chatbot/Chatbot"));
const aboutUs = lazy(() => import("./pages/about/aboutUs"));
const News = lazy(() => import("./pages/news/news"));
const ProjectDetails = lazy(() => import("./pages/projects/ProjectDetails"));
const Projects = lazy(() => import("./pages/projects/projects"));
const Contact = lazy(() => import("./pages/contact/contact"));
const IotResources = lazy(() => import("./pages/resources/iotResources"));
const IotTechnologies = lazy(() => import("./pages/resources/iotTechnologies"));
const IotStatistics = lazy(() => import("./pages/resources/iotStatistics"));
const IotUpdates = lazy(() => import("./pages/resources/iotUpdates"));
const Main = lazy(() => import("./pages/faq/main"));
const Report = lazy(() => import("./pages/report/report"));
const Login = lazy(() => import("./pages/login/login"));
const Logout = lazy(()=> import ("./pages/logout/logout"));
const Signup = lazy(() => import("./pages/signup/signup"));
const ResetPassword = lazy(() => import("./pages/reset_password/reset_demo"));
const newsSignupForm = lazy(() => import("./pages/email_newsletter_forms/subscribe"));
const newsUnsubForm = lazy(() => import("./pages/email_newsletter_forms/unsubscribe"));
const newsRemoveForm = lazy(() => import("./pages/email_newsletter_forms/remove"));
const SearchResults = lazy(() => import("./pages/search/SearchResults"));

function App () {
  const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const status = sessionStorage.getItem('status') === 'logged in';
  const session = rememberMe ? true : status;
  return (
    <>
      <Router>
        <NotificationComponent />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Switch>
              <Route path="/project/:projectId" component={ProjectDetails} />
              <Route exact path="/" component={Screen} />
              <Route exact path="/home" component={HomePage} />
              <Route path="/aboutus" component={aboutUs} />
              <Route path="/news" component={News} />
              <Route path="/chatbot" component={Chatbot} />
              <Route path="/projects" component={Projects} />
              <Route path="/report" component={Report} />
              <Route path="/contact" component={Contact} />
              <Route path="/iotResources" component={IotResources} />
              <Route path="/iotTechnologies" component={IotTechnologies} />
              <Route path="/iotStatistics" component={IotStatistics} />
              <Route path="/iotUpdates" component={IotUpdates} />
              <Route path="/faq" component={Main} />
              <Route path="/login" component={Login} />
              <Route exact path="/logout" component={Logout}/>
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={ResetPassword} />
              <Route path="/profile" component={Profile} />
              <Route path="/newsSignupForm" component={newsSignupForm} />
              <Route path="/newsUnsubForm" component={newsUnsubForm} />
              <Route path="/newsRemoveForm" component={newsRemoveForm} />
              <Route path="/search-results" component={SearchResults} />
              <Route component={NotFoundPage} />
              {rememberMe ? (<Route path='/' component={HomePage}/>) : (session ? (<Route path='/' component={HomePage}/>) : (<Route path='/' component={Screen}/>))}
            </Switch>
          </main>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
