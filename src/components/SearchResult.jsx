import React from 'react';
import {fetchDataFromApi} from '../utils/api';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodCard from './FoodCard';
import { useContext } from 'react';
import { Context } from '../context/contextApi';
import IngridientCard from './IngridientCard';


function SearchResult() {
  const {searchQuery} = useParams();
  const [result,setResult] = useState([]);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchResult();
  }
  
  ,[searchQuery]);

  const {modal,dishname} = useContext(Context);

  const fetchResult =()=>{
    fetchDataFromApi(searchQuery).then((data)=>{
      // console.log(data.data.hits);
      setResult(data.data.hits)
    })
  }

  return (
    <>
    <div className='md:grid flex flex-wrap justify-center items-center  md:grid-cols-4 lg:grid-col-5 xl:grid-cols-6 gap-2 p-5  w-full'>
      {result?.map((e)=>{

         
        // {console.log(e.recipe.image)}
        return(<>
        
       <FoodCard image={e.recipe.image} label = {(e.recipe.label).slice(0,30)} names={e.recipe.label} key={e.recipe.label}/>
       </>
       )
       
      })}
    </div>

    <div className="absolute flex justify-center items-center  sm:top-[10%] w-full bg-transparent">
      {modal && result.map((e)=>{
        
        if (e.recipe.label === dishname.names) {
          return (
            <IngridientCard label ={e.recipe.label} key={dishname.names} ingridient={e.recipe.ingredientLines} url ={e.recipe.url}/>
          )
        }
      })}
    </div>

    </>

    
  )
}

export default SearchResult
