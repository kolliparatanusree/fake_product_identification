import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Productvalidation from './Components/Productvalidation';
import Addproduct from './Components/Addproduct';
import Instructions from './Components/Instructions';
import Final from './Components/Final';
import Wrong from './Components/Wrong';
import Login1 from './Components/Login1';
import Admin from './Components/Admin';
import Details from './Components/Details';
import CustomNavbar from './Components/CustomNavbar';
import CustomNavbar1 from './Components/CustomNavbar1';
import CustomNavbar2 from './Components/CustomNavbar2';
export  const UserContext = createContext();
const App = () => {
  const[isLogin,setIsLogin]=useState(false);
  const[isAdmin,setIsAdmin]=useState(false);
  return (
    <UserContext.Provider value={{isLogin,setIsLogin,isAdmin,setIsAdmin}}>
    <Router>
    {isLogin?<CustomNavbar1></CustomNavbar1>:isAdmin?<CustomNavbar2></CustomNavbar2>:<CustomNavbar></CustomNavbar>}
        <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/productvalidation' element = {<Productvalidation/>}/>
        <Route path='/addproduct' element = {<Addproduct/>}/>
        <Route path='/instructions' element={<Instructions/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="/wrong" element={<Wrong/>}/>
        <Route path="/login1" element={<Login1/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/details" element={<Details/>}/>
        </Routes>
    </Router>
    </UserContext.Provider>
  );
};

export default App;