import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";  // Import Carousel CSS

function Carousl() {
  return (
    <div className="w-full h-full relative">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        interval={3000} 
        transitionTime={500} 
        emulateTouch
      >
        <div className="relative">
          <img src={Image2} alt="Delicious food" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>  {/* Overlay */}
          <h2 className="absolute inset-0 text-white text-3xl font-extrabold flex justify-center items-center text-center">
            Indulge in the Best Flavors
          </h2>
        </div>
        <div className="relative">
          <img src={Image3} alt="Delicious food" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>  {/* Overlay */}
          <h2 className="absolute inset-0 text-white text-3xl font-extrabold flex justify-center items-center text-center">
            A Taste of Perfection
          </h2>
        </div>
        <div className="relative">
          <img src={Image1} alt="Delicious food" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>  {/* Overlay */}
          <h2 className="absolute inset-0 text-white text-3xl font-extrabold flex justify-center items-center text-center">
            Explore New Recipes
          </h2>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousl;
