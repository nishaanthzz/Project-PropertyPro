import React from "react";
import './Navb.css';
import { Link } from "react-router-dom";
import {AiFillPlusCircle} from 'react-icons/ai';
import logo from '../../assets/logo (1).png';
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Navb=()=>
{
    return(
        
      <nav className="Navbar-head h-44">
        <img src={logo}  className="object-contain h-38 w-96"/>
      <ul className='Navbar-headings'>
        <li className='Nav-obj'><a className='nh' href="/">Home</a></li>
        <li className='Nav-obj '>
          
       {/* dropdown  */}
       
                          <menu className="dropdown h-8">
                          <ul>
                            <li className="translate-x-0.5 translate-y-4   ml-2 mr-3 flex text-center justify-center">
                              Properties<IoIosArrowDropdownCircle className="inline translate-x-2 translate-y-1 scale-150"/>
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
      <Link to='/SellPage' className='list-link  -translate-y-5 '>
      <button className="add-list-btn " 
      autoFocus>
        
        <AiFillPlusCircle size={40} />
        <span className="title text-lg -translate-y-3 pt-5">Post a Listing</span> 
        
      </button>
      </Link> 
      
    </nav>
    )
}
export default Navb;