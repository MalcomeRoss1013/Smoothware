import './App.css';
import NavbarComp from './components/NavbarComp';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login'; 
import Shop from './components/Shop';


import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavbarComp/>
      
      <div>
                    <Routes>
                        
                        <Route exact path="/Shop" element = {<Shop />}/>
                        <Route exact path="/login" element = {<Login />}/>
                        <Route exact path="/sign-in" element = {<Login />}/>                        <Route exact path="/register" element = {<Register />}/>
                        <Route exact path="/contact" element = {<Contact />}/> 
                        <Route exact path="/Smootheware" element = {<Home />}/>
                        <Route exact path="/" element = {<Home />}/>
               
                  </Routes>

                </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
