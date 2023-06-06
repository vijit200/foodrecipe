import React from 'react';
import {ImCross} from 'react-icons/im';
import { Context } from '../context/contextApi';
import { useContext } from 'react';
function IngridientCard({label,ingridient,url}) {
  const {setModal} = useContext(Context);
  const openTab = () =>{
      window.open(url)
  }
  return (
    <div className='flex justify-center w-full items-center'>
      <div className='w-full md:w-[40vw] h-fit  bg-orange-500 rounded-[10px]'>
        <div className=' flex justify-end items-center m-[5px] cursor-pointer'>
        
        <ImCross onClick={()=>setModal(false)}/>
        </div>

        <h2 className='text-center font-serif text-white font-extrabold text-[20px] mt-[5px] mb-[5px]'>{label}</h2>
        
        <h2 className='text-center font-serif text-white font-extrabold text-[20px]'>Ingridient</h2>
        {/* <p className='text-center text-white font-bold'>{ingridient}</p> */}
        {
          ingridient.map((e)=>{
            return(
              <p className=' text-white font-bold font-serif text-[18px] ml-4'>{e}</p>
            )
          })
        }

        <div className='flex justify-center items-center mt-[20px] mb-[20px]'>
            <button className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] border-[2px] text-white font-serif font-bold bg-red-600 rounded-[10px]' onClick={openTab}>Direction</button>
        </div>

        
        
      </div>
    </div>
  )
}

export default IngridientCard
