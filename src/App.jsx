import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/navbar/Home"
import About from "./components/navbar/About"
import Contact from "./components/navbar/Contact"
import LoginComponent from "./components/LoginComponent/LoginComponent"
import MainFooter from "./components/Footer/MainFooter";
import { LoginContext } from "./components/UserContext"

function App() {

    let [security, setSecurity] = useState(false);
    let [logComponentDisplay, setLogComponentDisplay] = useState(false)

    
    let [userName,setUserName]=useState("") ;
function getUserName(userNameData){
  setUserName (userNameData);
}

    return (
        <div className="app">
            <LoginContext.Provider value={{ security, setSecurity, logComponentDisplay, setLogComponentDisplay, userName }}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route  path="/my-Expense-Manager" element={<Home />} />
                        <Route  path="/About" element={<About />} />
                        <Route  path="/Contact" element={<Contact />} />
                    </Routes>
                    <div style={{ display: logComponentDisplay ? "inline-block" : "none" }}><LoginComponent getUserName={getUserName} /> </div>
                </BrowserRouter>
                <MainFooter />
            </LoginContext.Provider>

        </div>

    )
};

export default App;