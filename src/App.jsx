import { useState } from 'react'

import './App.css'
import {Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Facial_recognition from './pages/facial_recognition/facial_recognition';
import Self_driving_cars from './pages/self_driving_Cars/self_driving_cars';
import Drone_satellites from './pages/drones_satellites/drone_satellites';
import Retail_ecommerce from './pages/retail_ecommerce/retail_ecommerce';
import Figure_detection from './pages/figure_detection/figure_detection';
import Video_motion_tracking from './pages/video_motion_tracking/video_motion_tracking';
import Sports_annotation from './pages/sports_annotation/sports_annotation';
import Audio_annotation from './pages/audio_annotation/audio_annotation';
import Medical_annotation from './pages/medical_annotation/medical_annotation';



function App() {
 

  return (
   <div className="container poppins-regular ">  
       <Header/>
        <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/Facial_recognition" Component={Facial_recognition}/>
        <Route exact path="/Self_driving_cars" Component={Self_driving_cars}/>
        <Route exact path="/Drone_satellites" Component={Drone_satellites}/>
        <Route exact path="/Retail_ecommerce" Component={Retail_ecommerce}/>
        <Route exact path="/Figure_detection" Component={Figure_detection}/>
        <Route exact path="/Video_motion_tracking" Component={Video_motion_tracking}/>
        <Route exact path="/Sports_annotation" Component={Sports_annotation}/>
        <Route exact path="/Audio_annotation" Component={Audio_annotation}/>
        <Route exact path="/Medical_annotation" Component={Medical_annotation}/>

        </Routes>
        <Footer/>

   </div>
  )
}

export default App
