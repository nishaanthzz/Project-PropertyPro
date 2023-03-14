import './Card.css';
import React from 'react';

const Card=(prop)=>
{   
    
    return(
        <div className='card-body'>
             <div className='img-container'>
                <img src={prop.imgurl} alt="Failed to Load" />
             </div>
            <div className='card-content'>
                <div className='card-title'>
                <h3>{prop.title}</h3>
             </div>
             <div className='card-desc'>
                <p>{prop.desc}</p>
             </div>
             </div> 
             <div className='view-btn'>
                <button>
                    <a href='/'>
                    View
                    </a>
                </button>

             </div>
             
        </div>

    )

}
export default Card;