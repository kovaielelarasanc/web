import {BrowserRouter,Routes,Route} from 'react-router-dom';

import "../src/App.css";

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Themes from './components/Themes';
import Protfolio from './pages/Protfolio/Protfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Themes />
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/protfolio' element={<Protfolio />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
