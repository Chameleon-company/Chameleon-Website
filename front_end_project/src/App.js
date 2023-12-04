import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Chatbot from "./pages/Chatbot/Chatbot";
import About from "./pages/AboutPage/AboutPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ArticlePage from "./pages/NewsPage/ArticlePage";
import Projects from "./pages/ProjectPage/ProjectPage";
import Contact from "./pages/ContactPage/ContactPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import TechnologyPage from "./pages/ResourcesPage/TechnologyPage";
import StatisticsPage from "./pages/ResourcesPage/StatisticsPage";
import InnovationsPage from "./pages/ResourcesPage/InnovationsPage";
import Report from "./pages/ReportPage/ReportPage";
import Login from "./pages/LoginPage/LoginPage";
import Signup from "./pages/SignUpPage/SignUpPage";
import ResetPassword from "./pages/ResetPasswordPage/ResetPasswordPage";
import newsSignupForm from "./pages/email_newsletter_forms/subscribe";
import newsUnsubForm from "./pages/email_newsletter_forms/unsubscribe";
import newsRemoveForm from "./pages/email_newsletter_forms/remove";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/news/:id" element={<ArticlePage />} />
            <Route path="/news" element={<NewsPage />} /> 
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/report" element={<Report />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources">
              <Route index element={<ResourcesPage />} />
              <Route path="technologies" element={<TechnologyPage />} />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route path="innovations" element={<InnovationsPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/newsSignupForm" element={<newsSignupForm />} />
            <Route path="/newsUnsubForm" element={<newsUnsubForm />} />
            <Route path="/newsRemoveForm" element={<newsRemoveForm />} />
          </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
