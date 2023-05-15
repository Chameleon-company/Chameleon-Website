import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import Home from "./pages/home/home";
import Helloo from "./pages/hello/hello";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Portfolio from "./pages/portfolio/portfolio";
import Newsletter from "./pages/newsletter/newsletter";
import Contact from "./pages/contact/contact";
import Resources from "./pages/resources/resources";
import Calendar from "./pages/calendar/calendar";
import Main from "./pages/faq/main";
import Report from "./pages/report/report";
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
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path="/hello" component={Helloo} />
              <Route path="/about_us" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/newsletter" component={Newsletter} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/report" component={Report} />  
              <Route path="/contact" component={Contact} />
              <Route path="/emerging-tech" component={Resources} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/faq" component={Main} />  
              <Route path="/login" component={Login} />  
              <Route path="/signup" component={Signup} />  

            </Switch>
          </main>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
