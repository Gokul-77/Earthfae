import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home/Home.js'
import { Calculation } from './components/calculation/Calculation.js';
import Gallery from './components/gallery/Gallery.js';
import Contact from './components/contact/Contact.js';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/calculation' element={<Calculation/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
