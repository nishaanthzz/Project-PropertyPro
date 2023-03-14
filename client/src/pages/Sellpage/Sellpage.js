// import React, { useState } from 'react';
// import './Sellpage.css';
// import axios from 'axios';

// const Sellpage = () => {
   

// const [fName,setFName]=useState("")
// const [lName,setLName]=useState("")
// const [description,setDescription]=useState("")
// const [sbrl,setSbrl]=useState("")
// const [phno,setPhno]=useState("")
// const [email,setEmail]=useState("")
// const [area,setArea]=useState(0)
// const [price,setPrice]=useState(0)
// const [address,setAddress]=useState("")
// const [locality,setLocality]=useState("")
// const [city,setCity]=useState("")
// const [state,setState]=useState("")
// const [type,setType]=useState("Residential")
// const [bhk,setBhk]=useState(0)
// const [persqft,setPersqft]=useState(0)
// const [image,setImage]=useState([]);


// const [advance,setAdvance]=useState("0")

// const createObj=(e)=>
// { 
  
//   let listing_details=
// {
//   name: {fName: fName,
//         lName: lName},
//   phno: phno,
//   email: email,
//   type: type,
//   bhk: bhk,
//   address: address,
//   locality: locality,
//   city: city,
//   state: state,
//   area: area,
//   price: price,
//   persqft: Math.round((price/area)/ 10) * 10,
//   description: description,
//   postedDate: new Date(),
// }
// axios.post('localhost:5000/propertypro/post/ForSale',listing_details)
// .then((res)=>
// {if(res.status=='Success'){console.log("Posted on the wall!!")}} )





// }

// const uploadImage=()=>
// {
//   const idata=new FormData();
//   idata.append('file',image);
// }



//   return (
    
//         <div className='form-cont'>
            
//             <form action="" onSubmit={createObj}>
//               <div class="card-form">
//                 <h2>Post Your Property on the Wall today!</h2>
//                 <div class="row">
//                   <div class="col">
//                     <div class="form-group">
//                       <label>First Name</label>
//                       <input type="text"
//                       onChange={(e)=>setFName(e.target.value)} required/>
//                     </div>
//                   </div>
              
//                   <div class="col">
//                     <div class="form-group">
//                       <label>Surname</label>
//                       <input type="text"
//                       onChange={(e)=>setLName(e.target.value)} required/>
//                     </div>
//                   </div>

              
//                   <div class="col">
//                     <div class="form-group">
//                       <label>Email</label>
//                       <input type="email" pattern="[^ @]*@[^ @]*"
//                       onChange={(e)=>setEmail(e.target.value)} required/>
//                     </div>
//                   </div>
              
//                   <div class="col">
//                     <div class="form-group">
//                       <label>Phone</label>
//                       <input type="number" className='phNo'
//                       onChange={(e)=>setPhno(e.target.value)} required/>
//                     </div>
//                   </div>



//                   <div></div><div></div>


//                   <div className="col">
//                     <div className="form-group">
//                       <label>List As</label>
//                       <select name="Sale"
//                       onChange={(e)=>{ setSbrl(e.target.value); }}>
                        
//                       <label>List As {sbrl}</label>
//                         <option value="Sale" selected="true">Sale</option>
//                         <option value="Rent">Rent</option>
//                         <option value="Lease Out"> Lease Out</option>
//                       </select>
                     
//                     </div>
//                   </div>
//                   <div className="col">
//                     <div className="form-group type-choose">
//                       <label>Type</label>
//                       <select name="Sale"
//                       onChange={(e)=>{ setType(e.target.value); }}>
                        
//                       <label>List As {sbrl}</label>
//                         <option value="Residential" selected="true">Residential</option>
//                         <option value="Commecial Space">Commecial Space</option>
                        
//                       </select>
                     
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="form-group">
//                     { type=="Residential" &&
//                       <div>
//                         <label>BHK</label>
//                         <input type="number"
//                         onChange={(e)=>setBhk(e.target.value)} required/>
//                       </div>}
//                     </div>
//                   </div>
                 



                 
//                   <div class="col">
//                     <div class="form-group ">
//                       <label>Quote Your Price(L)</label>
//                       <br/>
//                       <input type="text"
//                       onChange={(e)=>setPrice(e.target.value)} placeholder={price} required/>
//                     </div>
//                   </div>
                  
                  
//                     <div class="col">
//                     <div class="form-group advance">
//                      { sbrl=="Rent" && <div >
//                        <label>Quote Your Advance</label>
//                       <h6> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;( Standard is 3 months of Rent)</h6>
                       
//                         <input type="text"
//                         onChange={(e)=>setAdvance(e.target.value)} value="0" />
//                      </div>}
//                     </div>
//                   </div>
//                   <div></div>

//                   <div class="col">
//                     <div class="form-group">
//                       <label>Address</label>
//                       <input className="add-inp" type="text" onChange={(e)=>setAddress(e.target.value)} required/>
//                     </div>
//                   </div>
//                   <div></div>
//                   <div></div>

//                   <div class="col">
//                     <div class="form-group">
//                       <label>Locality</label>
//                       <input type="text"
//                       onChange={(e)=>setLocality(e.target.value)} required/>
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="form-group">
//                       <label>City</label>
//                       <input type="text"
//                       onChange={(e)=>setCity(e.target.value)} required/>
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="form-group">
//                       <label>State</label>
//                       <input type="text"
//                       onChange={(e)=>setState(e.target.value)} required/>
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="form-group">
//                       <label>Area(SQ.FT.)</label>
//                       <input type="number"
//                       onChange={(e)=>setArea(e.target.value)} required/>
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="form-group">
//                       <label>Per. Sqft (excl. Taxes)</label>
//                       <input type="number" value={Math.round((price/area)/ 10) * 10}
//                      disabled/>
//                     </div>
//                   </div>
//                   <div></div>
//                   <div class="col">
//                     <div class="form-group">
//                       <label>Details</label>
//                       <textarea className="details-inp" type="text" onChange={(e)=>setDescription(e.target.value)}/>
//                     </div>
//                   </div>
//                   <div></div>
//                   <div></div>
//                  <input type="file"  multiple={true} onChange={(e)=>setImage(e.target.files)}/>
//                  <button type="button" onClick={uploadImage}>Upload</button>
                  
              
//                   <div class="col">
//                     <input type="submit" value="Submit"/>
//                   </div>
//                 </div>
//               </div>
//             </form>
//         </div>
//   )
// }

// export default Sellpage