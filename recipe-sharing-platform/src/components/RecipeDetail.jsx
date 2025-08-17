import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.recipes.find((r) => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="container mx-auto p-4">Recipe not found</div>;
  }
  return (
    <div>
      <div className="bg-white shadow-xl rounded-xl overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover md:h-auto"
          />
        </div>

        <div className="p-6 md:p-10 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {name}
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
