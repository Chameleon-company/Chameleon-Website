import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import HomePage from "./pages/homepage/Homepage";
import Chatbot from './pages/Chatbot/Chatbot';
import Helloo from "./pages/hello/hello";
import aboutUs from "./pages/about/aboutUs";
import Blog from "./pages/blog/blog";
import Projects from "./pages/projects/projects";
import News from "./pages/news/news";
import Contact from "./pages/contact/contact";
import IotResources from "./pages/resources/iotResources";
import IotTechnologies from "./pages/resources/iotTechnologies";
import IotStatistics from "./pages/resources/iotStatistics";
import IotUpdates from "./pages/resources/iotUpdates";
import Main from "./pages/faq/main";
import Report from "./pages/report/report";
import forgot from "./pages/forgot_password/forgot";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/hello" component={Helloo} />
            <Route path="/about_us" component={aboutUs} />
            <Route path="/blog" component={Blog} />
            <Route path="/chatbot" component={Chatbot} />
            <Route path="/news" component={News} />
            <Route path="/projects" component={Projects} />
            <Route path="/report" component={Report} />
            <Route path="/contact" component={Contact} />
            <Route path="/iotResources" component={IotResources} />
            <Route path="/iotTechnologies" component={IotTechnologies} />
            <Route path="/iotStatistics" component={IotStatistics} />
            <Route path="/iotUpdates" component={IotUpdates} />
            <Route path="/faq" component={Main} />
            <Route path="/forgot" component={forgot} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
