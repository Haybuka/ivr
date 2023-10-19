
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

const Home = lazy(() => import("./pages"));
const NavBar = lazy(() => import("./layout"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
