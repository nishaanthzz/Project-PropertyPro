import React from 'react';
import './Home.css';
import Card from './../../components/Card/Card.js';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Home = () => {

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
    <div className='home-body grid grid-cols-1 lg:grid-cols-4 gap-5 md:grid-cols-3 m-5'>

                    
  



     {data && data.map((singleData)=>{
         return <Card className='m-[50px]' obj={singleData} />
     })
     }
        
    </div>
  )
}

export {Home};