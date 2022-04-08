import React, { useContext } from "react";
import { LoginContext } from "../../UserContext";
import "./Logout.css"

function Logout(){

    const {security,setSecurity,logComponentDisplay, setLogComponentDisplay} = useContext(LoginContext)

    function logoutFun(){
        setSecurity(!security)
        setLogComponentDisplay(!logComponentDisplay)
    }
    function logDisplay(){
        setLogComponentDisplay(!logComponentDisplay)
    }

    return (

        <div  className="welcomeMsg">
           <p>Are you sure ?</p>
           <button  onClick={logoutFun}>Logout</button>
           <button className="logout1" onClick={logDisplay}>cancel</button>
        </div>
    )
}

export default Logout;