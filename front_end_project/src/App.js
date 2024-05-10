import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotificationComponent from "./components/notificationComp/NotificationComponent";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import Chatbot from "./pages/Chatbot/Chatbot";
import aboutUs from "./pages/about/aboutUs";
import Contact from "./pages/contact/contact";
import newsRemoveForm from "./pages/email_newsletter_forms/remove";
import newsSignupForm from "./pages/email_newsletter_forms/subscribe";
import newsUnsubForm from "./pages/email_newsletter_forms/unsubscribe";
import Main from "./pages/faq/main";
import Helloo from "./pages/hello/hello";
import HomePage from "./pages/homepage/Homepage";
import Login from "./pages/login/login";
import News from "./pages/news/news";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Projects from "./pages/projects/projects";
import Report from "./pages/report/report";
import ResetPassword from "./pages/reset_password/reset";
import IotResources from "./pages/resources/iotResources";
import IotStatistics from "./pages/resources/iotStatistics";
import IotTechnologies from "./pages/resources/iotTechnologies";
import IotUpdates from "./pages/resources/iotUpdates";
import SearchResults from "./pages/search/SearchResults";
import Signup from "./pages/signup/signup";
import Ques1 from "./pages/support/general_ques1";
import Ques2 from "./pages/support/general_ques2";
import Ques3 from "./pages/support/general_ques3";
import Ques4 from "./pages/support/general_ques4";
import ResourceQues1 from "./pages/support/resource_ques1";
import ResourceQues2 from "./pages/support/resource_ques2";
import ResourceQues3 from "./pages/support/resource_ques3";
import Support from "./pages/support/support";
import TechnologyQues1 from "./pages/support/technology_ques1";
import TechnologyQues2 from "./pages/support/technology_ques2";
import TechnologyQues3 from "./pages/support/technology_ques3";
import TechnologyQues4 from "./pages/support/technology_ques4";

function App() {
  return (
    <>
      <Router>
        {/* This is to ensure footer is at the bottom of the screen */}
        <div className="flex flex-col h-screen">
          <NotificationComponent />
          <Header />
          <main>
            <Switch>
              <Route path="/project/:projectId" component={ProjectDetails} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route path="/hello" component={Helloo} />
              <Route path="/about_us" component={aboutUs} />
              <Route path="/news" component={News} />
              <Route path="/chatbot" component={Chatbot} />
              <Route path="/projects" component={Projects} />
              <Route path="/report" component={Report} />
              <Route path="/contact" component={Contact} />
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
          <Footer />
        </div>

      </Router>
    </>
  );
}

export default App;
