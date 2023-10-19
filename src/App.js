import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages';
import NavBar from './layout';
import Contact from './pages/contact';

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
