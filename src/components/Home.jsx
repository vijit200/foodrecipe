import React from "react";
import food from "../images/food.webp";

function Home() {
  return (
    <div className="bg-yellow-100 w-full h-full">
      <div className="flex justify-center items-center mt-[20px]">
        <h1 className="text-[10vw] md:text-[5vw] text-green-700 font-serif font-extrabold">
          Recipe Finder
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between ml-[5vw] mr-[5vw]">
        <p className="w-full lg:w-[40vw] text-[8vw] lg:text-[5vw] font-extrabold font-serif text-red-500 ">Look for recipes for your favourite foods ❤️</p>
        <div className="">
          <img src={food} alt="food" className="w-[60vw] lg:w-[30vw]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
