
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';


import Home from './pages';
import Contact from './pages/contact';
import Services from './pages/services';
import NavBar from './layout'
import About from './pages/about';



function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='services' element={<Services />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
