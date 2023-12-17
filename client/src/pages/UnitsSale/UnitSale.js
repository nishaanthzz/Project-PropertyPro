import React, { useEffect,useState } from 'react'
import './UnitSale.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UnitSale = (prop ) => {
const [data, setData]=useState(null);
const [revealed, setRevealed]=useState(false);
const getdata= async ()=>
{ const obj = await axios.get(`http://localhost:5000/propertypro/get/ForSale/${id}`);
setData(obj["data"]["data"])
console.log(obj["data"]["data"])
// console.log(data.name.firstName+" "+data.name.lastName)
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
      
      
      
      <div className='lg:grid grid-cols-3 gap-2 h-fit p-8 rounded-lg bg-[#ffffffb0] w-[95%] shadow-[1rem_1rem_1rem_1rem_rgba(0,0,0,0.3)] shadow-slate-700 m-auto  border-4 border-[#f47070]'>
        
        <img src={data.imageUrl} alt="no ig" className=' w-[70%] rounded-lg'/>
        <div className=' details '>
          <h3 className='text-4xl font-bold text-[#ff6912cc]' >
            {data.locality}, {data.city}</h3>
          
        
        <div className=' grid grid-cols-3 p-8'>
          <div >
          <h4 className='font-bold text-[2rem] text-[#000000f5]'>{data.bhk}
          
           <span className="italic text-lg"> BHK</span>     </h4>
                 
            <h4 className='font-bold text-[2rem] text-[#000000f5]'>
              {data.area} 
            <span className='italic text-lg'> SqFt</span></h4>



          </div>

        </div>
        </div>
         {revealed?
              <button className="bg-[#ff520e]" onClick={setRevealed(true)}>
                Reveal Owner Details
              </button>
              :
              <div>
                <h3 className='text-4xl font-bold text-center'>
                  Owner Details</h3>
                <h4 className=' text-[#000000f5] text-center'>
                  {data.name.firstName+" "+data.name.lastName}</h4>
                <h4 className=' text-[#000000f5] text-center'>
                  {data.phone}</h4>
                <h4 className=' text-[#403e3ef5] text-center'>
                  {data.email}</h4>
              </div>
      }
          

        
      
      
      
      </div>}
    </div>
  )
}

export default UnitSale;