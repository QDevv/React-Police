
import './App.css';
// const input = document.getElementById('id');
// const inputvalue = input.value
import Form from './Form';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/>
    
    </Routes>
   <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
