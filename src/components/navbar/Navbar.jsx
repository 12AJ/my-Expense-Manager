import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png"
import navbarImg from "../img/navbarImg.png"
import { LoginContext } from "../UserContext";

function Navbar() {

    const {security ,setLogComponentDisplay ,userName} = useContext(LoginContext)


    let [navFun, setnavFun] = useState(false);
    function logDisplay(){
        setLogComponentDisplay("inline-block")
    }
 

    return (
        <div>
            <div className="navbehind"></div>
        <div className="navbar">
            <img src={logo} alt="Logo" className="logoImg" />
            <img src={navbarImg} alt="navbar List" onClick={() => setnavFun(!navFun)} className="navbarImg" id={navFun? "navbarImg":""} />

            <ul className="navOptions" id={navFun? "navOptionDropdown":""} >
                <li><NavLink  to="/" activeclassname="active">{security? userName:"Home"}</NavLink></li>
                <li><NavLink  to="/About" activeclassname="active">About</NavLink></li>
                <li><NavLink  to="/Contact" activeclassname="active">Contact</NavLink></li>
               
                   {
                    security ? <li className="log" onClick={logDisplay}>Log out</li>
                        : <li className="log"  onClick={logDisplay}>Login/Singup</li>
                }
                
            </ul>
            </div>
        </div >
    )
}

export default Navbar;