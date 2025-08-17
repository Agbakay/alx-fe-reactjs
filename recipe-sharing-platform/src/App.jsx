import React from "react";
import HomePage from "./components/homePage";
import { Route, Routes, BrowserRouter, Router, Link } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receipe/:id" element={<RecipeDetail />} />
      </Routes>

      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/receipe"}>Recipe Page</Link>
      </nav>
    </>
  );
};

export default App;
