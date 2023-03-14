
import './App.css';
import {  Route,Routes } from 'react-router-dom';
import Navb from './components/Navigation/Navb.js';
import {About} from './pages/About/About';
import { ContactUs} from './pages/ContactUs/ContactUs';
import {Home} from './pages/Home/Home.js'
import React from 'react';
import { FullDeets } from './pages/FullDeets/FullDeets';
import Sellpage from './pages/Sellpage/Sellpage';
import ForSalePage  from './pages/ForSalePage/ForSalePage';
import SellPage2 from './pages/SellPage2/SellPage2';
function App() {
  return (
    <div className="App">
      <Navb/>
      
      <Routes>
      <Route exact path="/" element={<Home title='Perambur' imgurl='/' desc="ppppppd Place" />}/>
        
      <Route exact path="/About" element={<About />}/>
      <Route exact path="/ContactUs" element={<ContactUs/>}/>
      
      {/* <Route exact path="/:id" element={<FullDeets />}/> */}
      
      <Route exact path="/ForSale" element={<ForSalePage/>}/>
      <Route exact path="/SellPage" element={<SellPage2/>}/>
      </Routes>
     
      

    </div>
  );
}

export default App;
