import './Card.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Card=(prop)=>
{   
let obj=prop.obj
console.log(obj)

    
    return(
      <Link to={`/Unit/${obj._id}`}>
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
             <div className='view-btn'>
                <button>
                    
                    View
                    
                </button>

             </div>
             
        </div>
        </Link>

    )

}
export default Card;