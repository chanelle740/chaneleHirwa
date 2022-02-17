
import React from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CheckBalance from "./views/CheckBalance";
import GetToken from "./views/GetToken";


function App() {
  return (
    <Router>
    <Navbar />
    
      <Routes>
      <Route path="/buy" element={<GetToken/>}/>
      <Route path="/balance" element={<CheckBalance/>}/>
      </Routes>
    
 
     
    
  </Router>
  );
}

export default App;
