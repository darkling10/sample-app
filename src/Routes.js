import React from "react";
import Modal from "pages/Modal";
import MostRecentMovies from "pages/MostRecentMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mostrecentmovies" element={<MostRecentMovies />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
