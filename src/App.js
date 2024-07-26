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
import { CartProvider } from './CartContext';
import Login from './Login';
import { createContext, useState } from 'react';



export const userLogin  = createContext();


function App() {
  
  const [logout,setLogout] = useState(false);
  const [username,setUsername] = useState("");
  return (
    <div className="App">
       <CartProvider>
       <BrowserRouter>
       <userLogin.Provider value={{logout,setLogout,username,setUsername}}>
     <Header/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/go-shop/:id' element={<Singlepage/>}/>
         <Route path='/view-cloth/:id' element={<Clothsinglepage/>}/>
         <Route path='/add-cart/:id' element={<AddCart/>}/>
     </Routes>
     <Footer/>
     </userLogin.Provider>
     </BrowserRouter>
       </CartProvider>
     
    </div>
  );
}

export default App;
