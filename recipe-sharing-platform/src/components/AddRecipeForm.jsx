import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Recipe title is required.";
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    }
    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white shadow-xl rounded-xl p-6 md:p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Add New Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="ingredients"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ingredients (separate with commas or new lines)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {errors.ingredients && (
              <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="steps"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preparation Steps (each step on a new line)
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="6"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {errors.steps && (
              <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
