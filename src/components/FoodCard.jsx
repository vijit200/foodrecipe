
import React from "react";
import { useContext } from "react";
import { Context } from "../context/contextApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FoodCard({ image, label, names }) {
  const notify = () => toast("ingridient is on top of the page");
  const {setModal,setDishName} = useContext(Context);
  const clickHandler = () =>{
    setModal(true)
    setDishName({names})
    alert("Ingridient at top of the page")
    
  }
  // console.log(dishname);
  return (
    
      <div className="w-[200px] h-[320px] border-[2px] rounded-[10px] bg-orange-400 hover:scale-[1.1] hover:shadow-2xl ">
        <div className="w-[197px]">
          <img src={image} alt="image" className="rounded-[5px]" />
        </div>

        <div className="w-[200px] h-[60px] mb-[4px]">
          <h3 className="text-center text-[19px] font-serif font-extrabold text-white">
            {label}
          </h3>
        </div>

        
        <button className="p-[10px] bg-red-600 block m-auto rounded-[10px] text-white font-bold cursor-pointer" onClick={clickHandler}>
          Check Recipe
        </button>

        
        
        
        
      </div>
      
    
  );
}

export default FoodCard;
