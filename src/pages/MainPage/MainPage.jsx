import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchUsers from "../../components/SearchUsers";
import SingleUser from "../../components/SingleUser";
const MainPage = () => {
  return (
    <Router>
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchUsers />} />

          <Route path="/single-user/:name" element={<SingleUser />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default MainPage;
