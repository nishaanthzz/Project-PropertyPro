import React, { useEffect,useState } from 'react'
import './UnitSale.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UnitSale = (prop ) => {
const [data, setData]=useState(null);

const getdata= async ()=>
{ const obj = await axios.get(`http://localhost:5000/propertypro/get/ForSale/${id}`);
setData(obj["data"]["data"])
console.log(obj["data"]["data"])
}
  const {id}=useParams();
  useEffect(()=>
  {
    getdata();
  }



    ,[]
  )

  return (
    <div>
      <div>UnitSale</div>
      {data&& 
      
      
      
      <div className='lg:grid grid-cols-2 gap-2 h-fit p-8 rounded-lg bg-[#ffffff] w-[95%] shadow-[1rem_1rem_1rem_1rem_rgba(0,0,0,0.3)] shadow-slate-700 m-auto  border-4 border-[#f47070]'>
        
        <img src={data.imageUrl} className=' w-[70%] rounded-lg'/>
        <div className=' details '>
          <h3 className='text-4xl'>
            {data.locality}, {data.city}</h3>
          
        
        <div className='bg-[#928929] sm:bg-[#000000] grid grid-cols-3 p-8'>
          <div>
            {data.bhk} <span className='font-bold text-[#ff4141cc]'>BHK</span>



          </div>
        
        
        
        
        </div>
        </div>
      
      
      
      
      </div>}
    </div>
  )
}

export default UnitSale;