import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
// import Home from "./pages/home/home";
import Helloo from "./pages/hello/hello";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Portfolio from "./pages/portfolio/portfolio";
import Newsletter from "./pages/newsletter/newsletter";
import Contact from "./pages/contact/contact";
import Resources from "./pages/resources/resources";
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/blog/BlogDetail";

function App() {
  return (
    <>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route exact path="/home" element={<Homepage/>} />
              <Route path="/hello" element={<Helloo/>} />
              <Route path="/about_us" element={<About/>} />
              <Route  path="/blog" element={<Blog/>} />
              <Route exact path="/blog/:id" element={<BlogDetail/>} />
              <Route path="/newsletter" element={<Newsletter/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/report" element={<Report/>} />  
              <Route path="/contact" element={<Contact/>} />
              <Route path="/emerging-tech" element={<Resources/>} />
              <Route path="/events" element={<Calendar/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/faq" element={<Main/>} />  
              <Route path="/forgot" element={<forgot/>} />
              <Route path="/login" element={<Login/>} />  
              <Route path="/signup" element={<Signup/>} />  
            </Routes>
          </main>
          {/* <Footer/> */}
        </Router>
    </>
  );
}

export default App;
