import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotificationComponent from "./components/notificationComp/NotificationComponent";
import Screen from './components/app/Screen';

const Header = lazy(() => import("./layouts/header/header"));
const Footer = lazy(() => import("./layouts/footer/footer"));
const HomePage = lazy(() => import("./pages/homepage/Homepage"));
const Chatbot = lazy(() => import("./pages/Chatbot/Chatbot"));
const Helloo = lazy(() => import("./pages/hello/hello"));
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
const Signup = lazy(() => import("./pages/signup/signup"));
const ResetPassword = lazy(() => import("./pages/reset_password/reset"));
const newsSignupForm = lazy(() => import("./pages/email_newsletter_forms/subscribe"));
const newsUnsubForm = lazy(() => import("./pages/email_newsletter_forms/unsubscribe"));
const newsRemoveForm = lazy(() => import("./pages/email_newsletter_forms/remove"));
const SearchResults = lazy(() => import("./pages/search/SearchResults"));

function App () {
  return (
    <>
      <Router>
        {/* This is to ensure footer is at the bottom of the screen */}
        {/* <div className="flex flex-col h-screen"> */}
        <NotificationComponent />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Header /> */}
          <main>
            <Switch>
              <Route path="/project/:projectId" component={ProjectDetails} />
              <Route exact path="/" component={Screen} />
              <Route exact path="/home" component={HomePage} />
              <Route path="/hello" component={Helloo} />
              <Route path="/about_us" component={aboutUs} />
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
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={ResetPassword} />
              <Route path="/newsSignupForm" component={newsSignupForm} />
              <Route path="/newsUnsubForm" component={newsUnsubForm} />
              <Route path="/newsRemoveForm" component={newsRemoveForm} />
              <Route path="/search-results" component={SearchResults} />
            </Switch>
          </main>
          {/* <Footer /> */}
        </Suspense>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
