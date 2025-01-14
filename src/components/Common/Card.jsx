import React, { useEffect, useState } from 'react';

const Card = ({image, title, description,id}) => {

    const [recipieData,setRecipieData] = useState([]);
    useEffect(() => {
        const recipies = fetch("https://dummyjson.com/recipes?limit=30")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.recipes);
            setRecipieData(
              data.recipes.filter((recipie) => {
                if(recipie.id == id) {
                    setRecipieData(recipie);    
                    return true
                }
              })
            );
          });
       
        
      }, []);
    const navigateToRecipie = () => {
            
        console.log(recipieData);
        
    }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Card example"
      />
      <div className="px-6 py-4">
        {/* Title */}
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        {/* Description */}
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        {/* Button */}
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded" onClick={navigateToRecipie}>
          Learn Full Recipie
        </button>
      </div>
    </div>
  );
};

export default Card;
