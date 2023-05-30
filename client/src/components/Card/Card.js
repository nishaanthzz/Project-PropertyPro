import './Card.css';
import React from 'react';
// import { Link, redirect } from 'react-router-dom';
import axios from 'axios';

const Card=(prop)=>
{   
let obj=prop.obj
console.log(obj)

   const updateInterests= async (e)=>
   {
      let result = await axios.patch(`http://localhost:5000/ForSale/UpdateInterests/${obj._id} `, {interests:obj.interests+1});
      console.log(result);
      window.location.href = "http://localhost:3000/Unit/"+obj._id;

   }
    return(
       
       <div className='card-body border-solid border-[3px] border-[#000000] cursor-pointer'>
             <div className='img-container'>
                <img src={obj.imageUrl} alt="Failed to Load" />
             </div>
            <div className='card-content'>
                <div className='card-title'>
                <h3 className=''>{obj.bhk}BHK @ {obj.locality}</h3>
             </div>
             <div className='card-desc h-[40%]  overflow-hidden text-ellipsis'>
                <p className='truncate'>{obj.description}</p>
             </div>
             <div className='font-bold text-xl '>
                {obj.persqft}/sqft

             </div>
             </div> 
           {/* <Link to={`/Unit/${obj._id}`}> */}
           <span className='pl-2'>👀{obj.interests} {(obj.interests>=25) && <span>🔥</span>} </span>
             <div className='view-btn'>
              
                <button onClick={updateInterests}>
                    
                    View
                    
                </button>

             </div>
            {/* </Link>  */}
        </div>
        

    )

}
export default Card;