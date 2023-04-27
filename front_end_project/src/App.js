import Header from "./layouts/header/header";
// import Footer from "./layouts/footer/footer";
import Home from "./pages/home/home";
import Helloo from "./pages/hello/hello";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Portfolio from "./pages/portfolio/portfolio";
import Newsletter from "./pages/newsletter/newsletter";
import Contact from "./pages/contact/contact";
import Resources from "./pages/resources/resources";
import Calendar from "./pages/calendar/calendar";
import Faq from "./pages/faq/faq";

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
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/newsletter" component={Newsletter} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/resources" component={Resources} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/faq" component={Faq} />    
            </Switch>
          </main>
          {/* <Footer  /> */}
        </Router>
    </>
  );
}

export default App;
