import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Carousl from "../Common/Carousl";
import Searchbox from "../Common/Searchbox";
import Card from "../Common/Card";
import Loader from "../Common/Loader";

const Recipies = () => {
  const [recipieData, setRecipieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=30")
      .then((res) => res.json())
      .then((data) => {
        setRecipieData(data.recipes);
      })
      .catch((error) => console.error("Error fetching recipes:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const isBaseRoute = location.pathname === "/recipes";

  return (
    <>
      {isBaseRoute && (
        <>
          <Carousl />
          <div className="relative">
            <h1 className="text-center text-5xl font-extrabold my-12 text-amber-500">
              Recipes
            </h1>
            <Searchbox />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-36 px-12">
              {isLoading ? (
                <Loader />
              ) : (
                recipieData.map((recipie) => (
                  <Card
                    image={recipie.image}
                    title={recipie.name}
                    description={recipie.cuisine}
                    key={recipie.id}
                    id={recipie.id}
                  />
                ))
              )}
            </div>
          </div>
        </>
      )}
      {/* Render child routes */}
      <Outlet />
    </>
  );
};

export default Recipies;
