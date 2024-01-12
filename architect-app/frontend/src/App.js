import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './screens/Employee';
import Login from './auth/Login';
import Register from './auth/Register';


function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/employee' Component={Employee}/>
      <Route path='/login' Component={Login}/>
      <Route path="/register" Component={Register} />
     
      
     {/* <Navbar/> */}
     

    
      </Routes>
       </BrowserRouter>
   
  );
}

export default App;
