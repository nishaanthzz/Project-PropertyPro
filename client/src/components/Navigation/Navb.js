import React from "react";
import './Navb.css';
import { Link } from "react-router-dom";
import {AiFillPlusCircle} from 'react-icons/ai';
import logo from '../../assets/logo (1).png';
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Navb=()=>
{
    return(
        
      <nav className="Navbar-head h-96 md:h-44">
        <img src={logo}  alt="Not FOUND " className="object-contain w-[40%] md:w-[30%] "/>
      <ul className='Navbar-headings'>
        <li className='Nav-obj'><a className='nh' href="/">Home</a></li>
        <li className='Nav-obj '>
          
       {/* dropdown  */}
       
                          <menu className="dropdown h-8">
                          <ul>
                            <li className="translate-x-0.5  -translate-y-2.5 mr-3 flex text-center justify-center">
                              Properties<IoIosArrowDropdownCircle className="translate-x-2 translate-y-2.5 scale-150"/>
                              <ul>
                                <li><Link to="/ForSale">Buy</Link></li>
                                <li>Rent/Lease</li>
                                <li >Plots For Sale</li>
                              </ul>
                            </li>
                            
                            
                           
                          </ul>
                          </menu>



          </li>
        <li className='Nav-obj'><Link className='nh' to="/About">About</Link></li>
        <li className='Nav-obj'><Link className='nh' to="/ContactUs">ContactUs</Link></li>
      </ul>
      <Link to='/SellPage' className=' list-link  duration-[1.02s] hover:scale-[1.02] border-[3px] border-[#101001] '>
                <button  className="add-list-btn p-2 cursor-pointer pl-3 flex items-center justify-center  text-white
" 
                >
                  
                  <AiFillPlusCircle size={40} />
                  <span className="title text-[60%] font-extrabold pt-[3%] pl-2 tracking-wide inline whitespace-nowrap -translate-y-1;">
                    Post a Listing
                    </span> 
                  
                </button>
      </Link> 
      
    </nav>
    )
}
export default Navb;