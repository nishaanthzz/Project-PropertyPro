
import './App.css';
import {  Route,Routes } from 'react-router-dom';
import Navb from './components/Navigation/Navb.js';
import {About} from './pages/About/About';
import { ContactUs} from './pages/ContactUs/ContactUs';
import {Home} from './pages/Home/Home.js'
import React from 'react';
import ForSalePage  from './pages/ForSalePage/ForSalePage';
import SellPage2 from './pages/SellPage2/SellPage2';
import { Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import UnitSale from './pages/UnitsSale/UnitSale';
import Login from './pages/Login/Login';
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
      <Route path='*' element={<Navigate />} />
      <Route path='/Unit/:id' element={<UnitSale/>} />
      <Route path='/Login' element={<Login/>} />
      </Routes>


      <Footer/>
     
      

    </div>
  );
}

export default App;
