import { useState } from 'react'

import './App.css'
import {Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

function App() {
 

  return (
   <div className="container">
       <Header/>
        <Routes>
        <Route exact path="/" Component={Home}/>
        

        </Routes>
        <Footer/>

   </div>
  )
}

export default App
