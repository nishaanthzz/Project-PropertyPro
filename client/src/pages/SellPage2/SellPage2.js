import './Sellpage2.css'
import React from 'react'
import './formstates.js';
import { useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
const SellPage2 = () => {
  const data=new FormData();
  const navigate = useNavigate();

                                                                        const [fName,setFName]=useState("")
                                                                        const [lName,setLName]=useState("")
                                                                        const [description,setDescription]=useState("")
                                                                        // const [sbrl,setSbrl]=useState("")
                                                                        const [phno,setPhno]=useState("")
                                                                        const [email,setEmail]=useState("")
                                                                        const [area,setArea]=useState(0)
                                                                        const [price,setPrice]=useState(0)
                                                                        const [address,setAddress]=useState("")
                                                                        const [locality,setLocality]=useState("")
                                                                        const [city,setCity]=useState("")
                                                                        const [state,setState]=useState("")
                                                                        const [type,setType]=useState("Residential")
                                                                        const [bhk,setBhk]=useState(0)
                                                                        // const [persqft,setPersqft]=useState(0)
                                                                        const [images,setImages]=useState();
                                                                        // const [advance,setAdvance]=useState("0")
                                                                        // const [imageUrl,setImageUrl]=useState("")
                                                                        const [pincode,setPincode]=useState("")
  
                                                                        const createObj= (imageUrl)=>
                                                                        { 
                                                                         

                                                                          let listing_details=
                                                                        {
                                                                          name: {firstName: fName, lastName: lName},
                                                                          phno: phno,
                                                                          email: email,
                                                                          type: type,
                                                                          bhk: bhk,
                                                                          address: address,
                                                                          locality: locality,
                                                                          city: city,
                                                                          state: state,
                                                                          pincode: pincode,
                                                                          area: area,
                                                                          price: price,
                                                                          persqft: Math.round((price/area)/ 10) * 10,
                                                                          description: description,
                                                                          postedDate: new Date(),
                                                                          interests: 0,
                                                                          imageUrl: imageUrl
                                                                        }
                                                                       axios.post('http://localhost:5000/propertypro/post/ForSale',listing_details)
                                                                        .then((res)=>
                                                                        {console.log("Posted on the wall!!")} ).catch((err)=>console.log(err))
                                                                        navigate('/')
                                                                       

                                                                        }
                                                                        const handleImgUpload= (e)=>
                                                                        { 
                                                                        e.preventDefault();
                                                                          
                                                                          
                                                                          data.append('file',images);
                                                                          data.append('upload_preset','makppttx');
                                                                          data.append('cloud_name','drwvpgnza')
                                                                         
                                                                          fetch("https://api.cloudinary.com/v1_1/drwvpgnza/image/upload",
                                                                          {
                                                                            method: "post",
                                                                            body : data,
                                                                          })
                                                                          .then((res)=>res.json())
                                                                          .then((data)=>createObj(data.url))
                                                                            .catch((err)=>console.log(err));
                                                                            


                                                                        }
                                                                      
                                                                          
                                                                        
                                                                        

  







  return (
    <div className=' mx-auto my-5 bg-gradient-to-r from-[#ffd1d1] to-[#ffd0d0] w-4/5 text-center border border-solid border-[#7931ed] rounded-[2rem]'>
      <div><h1 className='form-title text-5xl my-10 font-bold text-[#391a59]'>POST YOUR PROPERTY ON THE WALL TODAY!</h1></div>
        <form action="http://localhost:3000/" method="post" className='listprop-form ' onSubmit={handleImgUpload}>
          <div className="all-inps grid grid-cols-3 gap-3 ">
            <div className="p-5">
              <h4 className=''>First Name</h4>
              <input type="text" className='firstName border-solid hover:border-dotted'
              onChange={(e)=>setFName(e.target.value)}/>
              </div>


            


                                              <link rel="preconnect" href="https://fonts.googleapis.com" />
                                              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                                              <link href="https://fonts.googleapis.com/css2?family=Alef:wght@700&family=Tilt+Warp&display=swap" rel="stylesheet" />



            
              <div>
                <h4 className=''>Last Name</h4>
                <input type="text" className='lastName' 
                onChange={(e)=>setLName(e.target.value)} required/>
                </div>
                <div>
                <h4 className=''>Gender</h4>
                <select>
                  <option value="Male" >Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <h4 className=''>Phone Number (+91)</h4>
                <input type="number" className='phno' onChange={(e)=>setPhno(e.target.value)} required/>
              </div>
              <div>
              <h4 className=''>Email</h4>
                <input type="email" className='email' onChange={(e)=>setEmail(e.target.value) } required/>
              </div>
              <div>
              <h4 className=''>Type</h4>
                <select onChange={(e)=>setType(e.target.value) }>
                  <option value="Residential">Residential </option>
                  <option value="Commercial">Commercial   </option>
                </select>
              
                
                </div>
              <div>
              <h4 className=''>BHK</h4>
                <input type="number" className='bhk' min="0" max="10" onChange={(e)=>setBhk(e.target.value) } required/></div>
              <div>
              <h4 className=''>Address</h4>
                <input type="text" className='address'  onChange={(e)=>setAddress(e.target.value) } required/></div>
              <div>
              <h4 className=''>Locality</h4>
                <input type="text" className='locality' onChange={(e)=>setLocality(e.target.value) } required /></div>
              <div>
              <h4 className=''>City</h4>
                <input type="text" className='city' onChange={(e)=>setCity(e.target.value) } required/></div>
              <div>
              <h4 className=''>State</h4>

                <input type="text" className='state' onChange={(e)=>setState(e.target.value) } required/></div>
                <div>
              <h4 className=''>Pincode</h4>
              <br></br>
                <input type="text" className='persqft' onChange={(e)=>setPincode(e.target.value)}/>
                
                </div>
              <div>
                
              <h4 className=''>Area (SQ.FT.)</h4>
                <input type="number" className='area' onChange={(e)=>setArea(e.target.value) } required/></div>
              <div>
              <h4 className=''>Price </h4>
                <br/>
                <input type="number" className='price' onChange={(e)=>setPrice(e.target.value) } required/></div>
              <div>
              <h4 className=''>Per SQ. FT.</h4>
              <br></br>
                <input type="number" className='persqft' value={Math.round((price/area)/ 10) * 10}   disabled/>
                
                </div>
              <div className='flex items-center justify-center'>
                <br/>
                <br/>
                <input className ="" type="file"  onChange={(e)=>{ 
                  const file = e.target.files[0];
                  setImages(file)}} />
              
                
              </div>
              <div>
              <h4 className=''>Description </h4>
              <label className='text-[45%] text-[#3b4441]'>Keep it as detailed to gain more interests and potential enquiries.</label>
                <input type="text" className='description' onChange={(e)=>setDescription(e.target.value) }/>
                </div>
              <div className='col-start-3 col-end-4 flex items-center justify-center'>
              
                <button type="submit" className='sub-button border border-solid-1 p-4 w-60 bg-[#312C8E] text-center text-[#ffffff] font-extrabold text-lg rounded-full ' 
                value="Submit" >Submit</button>
                </div>
            
          </div>
            



        </form>




    </div>

  )
}

export default SellPage2