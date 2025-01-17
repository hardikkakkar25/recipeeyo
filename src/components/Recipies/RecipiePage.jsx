import React from "react";
import { useLocation, useParams } from "react-router-dom";

const RecipiePage = () => {
  const { id } = useParams(); // Extract recipe ID from the URL
  const location = useLocation(); // Access state passed during navigation
  const recipeData = location.state[0]; // Extract recipe data
  console.log(recipeData)
  if (!recipeData) {
    return (
      <>
        <div className="text-center text-xl text-red-500">
          No data available for this recipe.
        </div>
        <button
          className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
          onClick={() => window.history.back()}
        >
          Back to Recipes
        </button>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${recipeData.image})` }}
        ></div>

        {/* Content Section */}
        <div className="p-6 sm:p-10">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {recipeData.name}
          </h1>
          {/* Cuisine Type */}
          <p className="text-lg text-gray-600 mb-6">
            Cuisine: <span className="font-semibold">{recipeData.cuisine}</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {recipeData.description || "No description provided."}
          </p>

          {/* Ingredients */}
          {recipeData.ingredients && recipeData.ingredients.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {recipeData.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions */}
          {recipeData.instructions && recipeData.instructions.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                {recipeData.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 py-4 px-6 text-center border-t">
          <button
            className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
            onClick={() => window.history.back()}
          >
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipiePage;
