import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotificationComponent from "./components/notificationComp/NotificationComponent";
import Screen from './components/app/Screen';
import ThemeContext from "./context/theme-provider";
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
const Signup = lazy(() => import("./pages/signup/signup"));
const ResetPassword = lazy(() => import("./pages/reset_password/reset"));
const newsSignupForm = lazy(() => import("./pages/email_newsletter_forms/subscribe"));
const newsUnsubForm = lazy(() => import("./pages/email_newsletter_forms/unsubscribe"));
const newsRemoveForm = lazy(() => import("./pages/email_newsletter_forms/remove"));
const SearchResults = lazy(() => import("./pages/search/SearchResults"));

function App () {
  // const theme = useContext(ThemeContext);
  const storedTheme = sessionStorage.getItem('theme') || (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [theme, setTheme] = useState(storedTheme);
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
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
              <Route path="/faq" component={Main} /> {/*Tailwind migration done till here */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={ResetPassword} />
              {/* TODO: Support Page Route */}
              <Route path="/newsSignupForm" component={newsSignupForm} />
              <Route path="/newsUnsubForm" component={newsUnsubForm} />
              <Route path="/newsRemoveForm" component={newsRemoveForm} />
              <Route path="/search-results" component={SearchResults} />
            </Switch>
          </main>
        </Suspense>
      </Router>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
