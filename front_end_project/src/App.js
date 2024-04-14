import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import HomePage from "./pages/homepage/Homepage";
import Chatbot from "./pages/Chatbot/Chatbot";
import aboutUs from "./pages/about/aboutUs";
import News from "./pages/news/news";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import IotResources from "./pages/resources/iotResources";
import IotTechnologies from "./pages/resources/iotTechnologies";
import IotStatistics from "./pages/resources/iotStatistics";
import IotUpdates from "./pages/resources/iotUpdates";
import Main from "./pages/faq/main";
import Report from "./pages/report/report";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ResetPassword from "./pages/reset_password/reset";
import newsSignupForm from "./pages/email_newsletter_forms/subscribe";
import newsUnsubForm from "./pages/email_newsletter_forms/unsubscribe";
import newsRemoveForm from "./pages/email_newsletter_forms/remove";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotificationComponent from "./components/notificationComp/NotificationComponent";
import Screen from './components/app/Screen';

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
    </>
  );
}

export default App;
