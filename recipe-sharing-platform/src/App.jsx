import React from "react";
import HomePage from "./components/homePage";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/receipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
