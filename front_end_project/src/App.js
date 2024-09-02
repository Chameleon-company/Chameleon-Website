import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Screen from './components/app/Screen';
import NotificationComponent from './components/notificationComp/NotificationComponent';
import NotFoundPage from './pages/error404/404.js';
import Profile from './pages/profile/profile.js';
import Post from './pages/profile/post.js';

const HomePage = lazy(() => import('./pages/homepage/Homepage'));
const Chatbot = lazy(() => import('./pages/Chatbot/Chatbot'));
const aboutUs = lazy(() => import('./pages/about/aboutUs'));
const News = lazy(() => import('./pages/news/news'));
const ProjectDetails = lazy(() => import('./pages/projects/ProjectDetails'));
const Projects = lazy(() => import('./pages/projects/projects'));
const Contact = lazy(() => import('./pages/contact/contact'));
const IotResources = lazy(() => import('./pages/resources/iotResources'));
const IotTechnologies = lazy(() => import('./pages/resources/iotTechnologies'));
const IotStatistics = lazy(() => import('./pages/resources/iotStatistics'));
const IotUpdates = lazy(() => import('./pages/resources/iotUpdates'));
const Main = lazy(() => import('./pages/faq/main'));
const Report = lazy(() => import('./pages/report/report'));
const Login = lazy(() => import('./pages/login/login'));
const Logout = lazy(() => import('./pages/logout/logout'));
const Signup = lazy(() => import('./pages/signup/signup'));
const ResetPassword = lazy(() => import('./pages/reset_password/reset_demo'));
const newsSignupForm = lazy(
  () => import('./pages/email_newsletter_forms/subscribe'),
);
const newsUnsubForm = lazy(
  () => import('./pages/email_newsletter_forms/unsubscribe'),
);
const newsRemoveForm = lazy(
  () => import('./pages/email_newsletter_forms/remove'),
);
const SearchResults = lazy(() => import('./pages/search/SearchResults'));
const Ques1 = lazy(() => import('./pages/support/general_ques1'));
const Ques2 = lazy(() => import('./pages/support/general_ques2'));
const Ques3 = lazy(() => import('./pages/support/general_ques3'));
const Ques4 = lazy(() => import('./pages/support/general_ques4'));
const ResourceQues1 = lazy(() => import('./pages/support/resource_ques1'));
const ResourceQues2 = lazy(() => import('./pages/support/resource_ques2'));
const ResourceQues3 = lazy(() => import('./pages/support/resource_ques3'));
const Support = lazy(() => import('./pages/support/support'));
const TechnologyQues1 = lazy(() => import('./pages/support/technology_ques1'));
const TechnologyQues2 = lazy(() => import('./pages/support/technology_ques2'));
const TechnologyQues3 = lazy(() => import('./pages/support/technology_ques3'));
const TechnologyQues4 = lazy(() => import('./pages/support/technology_ques4'));

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
              <Route path="/profile" component={Profile} />
              <Route path="/posts/:id" component={Post} />
              <Route path="/faq" component={Main} />
              <Route path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={ResetPassword} />
              <Route path="/support" component={Support} />
              <Route path="/general_ques1" component={Ques1} />
              <Route path="/general_ques2" component={Ques2} />
              <Route path="/general_ques3" component={Ques3} />
              <Route path="/general_ques4" component={Ques4} />
              <Route path="/technology_ques1" component={TechnologyQues1} />
              <Route path="/technology_ques2" component={TechnologyQues2} />
              <Route path="/technology_ques3" component={TechnologyQues3} />
              <Route path="/technology_ques4" component={TechnologyQues4} />
              <Route path="/resource_ques1" component={ResourceQues1} />
              <Route path="/resource_ques2" component={ResourceQues2} />
              <Route path="/resource_ques3" component={ResourceQues3} />
              <Route path="/newsSignupForm" component={newsSignupForm} />
              <Route path="/newsUnsubForm" component={newsUnsubForm} />
              <Route path="/newsRemoveForm" component={newsRemoveForm} />
              <Route path="/search-results" component={SearchResults} />
              {/* {session ? (<Route path='/' component={HomePage}/>) : (<Route path='/' component={Screen}/>)} */}
              <Route component={NotFoundPage} />
              {/* {rememberMe ? (<Route path='/' component={HomePage}/>) : (session ? (<Route path='/' component={HomePage}/>) : (<Route path='/' component={Screen}/>))} */}
            </Switch>
          </main>
        </Suspense>
      </Router >
    </>
  );
}

export default App;
