import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Singlepage from './Singlepage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/go-shop/:id' element={<Singlepage/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
