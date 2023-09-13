import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
// import Home from "./pages/home/home";
import Helloo from "./pages/hello/hello";
import aboutUs from "./pages/about/aboutUs";
import Blog from "./pages/blog/blog";
import Portfolio from "./pages/portfolio/portfolio";
import Newsletter from "./pages/newsletter/newsletter";
import Contact from "./pages/contact/contact";
import Resources from "./pages/resources/resources";
import IotTechnologies from "./pages/resources/iotTechnologies";
import IotStatistics from "./pages/resources/iotStatistics";
import IotUpdates from "./pages/resources/iotUpdates";
// import Calendar from "./pages/calendar/calendar";
import Calendar from "./components/calendar/calenderView";
import Events from "./components/calendar/eventViewCard";
import Main from "./pages/faq/main";
import Report from "./pages/report/report";
import forgot from "./pages/forgot_password/forgot";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Homepage from "./pages/homepage/index";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/home" component={Homepage} />
              <Route path="/hello" component={Helloo} />
              <Route path="/about_us" component={aboutUs} />
              <Route path="/blog" component={Blog} />
              <Route path="/newsletter" component={Newsletter} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/report" component={Report} />  
              <Route path="/contact" component={Contact} />
              <Route path="/what-is-iot" component={Resources} />
              <Route path="/iotTechnologies" component={IotTechnologies} />
              <Route path="/iotStatistics" component={IotStatistics} />
              <Route path="/iotUpdates" component={IotUpdates} />
              <Route path="/events" component={Calendar} />
              <Route path="/events" component={Events} />
              <Route path="/faq" component={Main} />  
              <Route path="/forgot" component={forgot} />
              <Route path="/login" component={Login} />  
              <Route path="/signup" component={Signup} />  
            </Switch>
          </main>
          {/* <Footer/> */}
        </Router>
    </>
  );
}

export default App;
