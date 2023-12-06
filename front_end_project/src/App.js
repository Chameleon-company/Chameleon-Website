import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import HomePage from "./pages/homepage/Homepage";
import Chatbot from "./pages/Chatbot/Chatbot";
import Helloo from "./pages/hello/hello";
import aboutUs from "./pages/about/aboutUs";
import News from "./pages/news/news";
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
import NotificationComponent from "./components/notificationComp/NotificationComponent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
        {/* This is to ensure footer is at the bottom of the screen */}
        <div className="flex flex-col h-screen">
          <NotificationComponent />
          <Header />
          <main>
          <Router>
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/hello" element={<Helloo />} />
              <Route path="/about_us" element={<aboutUs />} />
              <Route path="/news" element={<News />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/report" element={<Report />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/iotResources" element={<IotResources />} />
              <Route path="/iotTechnologies" element={<IotTechnologies />} />
              <Route path="/iotStatistics" element={<IotStatistics />} />
              <Route path="/iotUpdates" element={<IotUpdates />} />
              <Route path="/faq" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/newsSignupForm" element={<newsSignupForm />} />
              <Route path="/newsUnsubForm" element={<newsUnsubForm />} />
              <Route path="/newsRemoveForm" element={<newsRemoveForm />} />
            </Routes>
          </Router>
          </main>
          <Footer />
        </div>
    </>
  );
}

export default App;
