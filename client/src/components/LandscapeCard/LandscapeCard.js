import React from 'react'
import './LandScapeCard.css'

const LandscapeCard = (prop) => {

  const obj=prop.obj
  console.log(obj)
 

  return (

    
    <div className='landscape-body w-[80%] m-auto bg-[#ff7361a1] border-solid border-4 border-[#000000] h-52 rounded-[20px]'>
        <div className='lcard h-10 grid grid-cols-[30%_45%_25%] gap-3'>
          <div className='image-slides'>
              <img src={obj.imageUrl} alt="No image" className='h-48 my-auto p-2 rounded-[20px]' />

          </div>
          <div className='property-details '>
              <h3 className='text-4xl pt-2 font-[1100] '>{obj.bhk}BHK at {obj.locality}, {obj.city}</h3>
              <h2 className='pl-3 text-xl'>{obj.area} SqFt</h2>
              <p className='pl-3 font-[102]'>{obj.description}</p>
              <h2 className='text-3xl text-[#f44141]'>₹{obj.price} <span className='text-[#000000] font-[99] text-[50%] pl-1'>₹{obj.persqft}/SqFt ( excl. taxes )</span></h2>
              

          </div>
          <div className='contact-details  flex text-center justify-center '>
          <div className='m-auto width-[60%] ' >
            <button
              className='p-4 bg-red-500 rounded-full'
              >See More</button>
          </div>
          </div>
            


        </div>



    </div>
    
    
  )
}

export default LandscapeCard