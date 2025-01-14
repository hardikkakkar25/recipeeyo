import React, { useEffect, useState } from "react";
import Carousl from "../Common/Carousl";
import Searchbox from "../Common/Searchbox";
import { data } from "autoprefixer";
import Card from "../Common/Card";
const Recipies = () => {
    const [recipieData,setRecipieData] = useState([]);
    useEffect(() => {
        const recipies = fetch('https://dummyjson.com/recipes?limit=30')
        .then(res => res.json())
        .then((data) => {
            setRecipieData(data.recipes.map((recipie) => {
                return <Card image={recipie.image} title={recipie.name} description={recipie.cuisine} key={recipie.id} id={recipie.id}/>
            }));
        });

    },[])
    
  return (
    <>
      <Carousl />
      <div className="relative">
        <h1 className="text-center text-5xl font-extrabold my-12 text-amber-500">
          Recipies
        </h1>
        <Searchbox />
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-4 mt-36 px-12">
            {recipieData}
        </div>
      </div>
    </>
  );
};

export default Recipies;
