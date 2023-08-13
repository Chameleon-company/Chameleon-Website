import Header from "./layouts/header/header";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/homepage/Home"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./layouts/footer/footer";

function App() {
  return (
    <>
        <Router>
          <Header />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/news" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/support" component={Projects} />
            </Switch>
          </main>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
