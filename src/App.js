import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Singlepage from './Singlepage';
import Clothsinglepage from './Clothsinglepage';
import AddCart from './AddCart';

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
         <Route path='/view-cloth/:id' element={<Clothsinglepage/>}/>
         <Route path='/add-cart' element={<AddCart/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
