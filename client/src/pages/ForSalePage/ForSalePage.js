import './ForSalePage.css';
import LandscapeCard from '../../components/LandscapeCard/LandscapeCard'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ForSalePage = () => {
  const [data, setData]=useState(null)
const getdata= async ()=>
 { const obj = await axios.get('http://localhost:5000/propertypro/get/ForSale');
 setData(obj["data"]["data"])
 console.log(obj["data"]["data"])
}
useEffect
(
  ()=>{
    getdata()
  }
,[]
)
  

  
 
  return (
    <div>
      <div>ForSale</div>
      
       {data && data.map((singleData)=>{
         return <LandscapeCard obj={singleData} />
     })
     }
    </div>
  )
}

export default ForSalePage;