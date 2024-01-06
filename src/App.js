import React from 'react';
// import {Routes , Route} from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Notes from './component/Notes'
import About from './component/About'
// import Try from './component/Try'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Notes/>
      <About/>
    </>
  )
}

export default App