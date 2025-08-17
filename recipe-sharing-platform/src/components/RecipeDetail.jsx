import React from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("0");

  useEffect(() => {
    const foundRecipe = data.recipes.find((r) => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="container mx-auto p-4">Recipe not found</div>;
  }
  return <div>RecipeDetail</div>;
};

export default RecipeDetail;
