import React, { useContext, useState } from "react";
import { LoginContext } from "../../UserContext";
import "./LoginPage.css"
import SignupPage from "./SignupPage"
import closebtn from "../../img/closebtn.png"


function LoginPage(props) {

    const { logComponentDisplay, setLogComponentDisplay } = useContext(LoginContext)
    function logDisplay() {
        setLogComponentDisplay(!logComponentDisplay)
    }

    function signupInputFun(signupData) {
        props.signupInputFun2(signupData)
    }


    let emailInput;
    function emailInputFun(e) {
        emailInput = e.target.value;
        return emailInput;
    };
    let passInput;
    function passInputFun(e) {
        passInput = e.target.value;
        return passInput;
    }

    function loginBtn(e) {
        e.preventDefault();
        let userData = {
            emailInput: emailInput,
            passInput: passInput,
        }
        props.loginInputFun(userData);
        // setLogComponentDisplay(!logComponentDisplay)
    }

    let [switchPage, setSwitchPage] = useState(true);

    return (
        <div >

            {
                switchPage === true ?
                    <div >
                       
                        <form className="login" onSubmit={loginBtn} >
                        <div id="close" onClick={logDisplay}><img src={closebtn} alt="close" /></div>
                            <h2>LogIn</h2>
                            <label>Email  </label><input type="email" onChange={emailInputFun} required />
                            <label>Password  </label><input type="password" onChange={passInputFun} required />
                            <button type="submit" >Login</button>
                            <button id="signupbtn" onClick={() => setSwitchPage(!switchPage)}><p>New User?</p><p>Signup here</p></button>
                            <div className="invalid"> {props.invalidC}</div>
                        </form>
                    </div>
                    :
                    <SignupPage setSwitchPage={setSwitchPage} switchPage={switchPage} signupInputFun={signupInputFun} />
            }
        </div>
    )
}

export default LoginPage;