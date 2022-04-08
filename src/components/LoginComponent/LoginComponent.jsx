import React, { useContext, useState } from "react";
import "./LoginComponent.css";
import LoginPage from "./components/LoginPage";
import { LoginContext } from "../UserContext";
import Logout from "./components/Logout"

function LoginComponent(props) {

    const {security,setSecurity, logComponentDisplay, setLogComponentDisplay} = useContext(LoginContext);

    let [signupData2, setSignupData2] = useState([{
        nameInput: "Raj Ingale",
        emailInput: "a@b.c",
        passInput: "123"
    }]);
    function signupInputFun(signupData) {
        setSignupData2(signupData2=>[ ...signupData2, signupData ])
    }

    // let [userName , setUserName] = useState("");

    let [invalidC, setInvalidC] = useState("");

    function loginInputFun(userData) {
        for ( let data of signupData2){
        if (data.emailInput === userData.emailInput && data.passInput === userData.passInput) {
            setSecurity(!security);
            // setUserName (data.nameInput) ;
            setLogComponentDisplay(!logComponentDisplay)
            props.getUserName(data.nameInput)
        }
        else {
            setInvalidC(<p>Invalid Credentials</p>)
        }
    }
}

    return (
        <div className="LoginComponent">
            {security?<Logout/>:
                         <LoginPage loginInputFun={loginInputFun} invalidC={invalidC} signupInputFun2={signupInputFun} />
           }
              
        </div>

    )
};

export default LoginComponent;