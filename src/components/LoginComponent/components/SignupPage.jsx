import React, { useContext, useState } from "react";
import { LoginContext } from "../../UserContext";
import "./SignupPage.css"
import closebtn from "../../img/closebtn.png"

function SignupPage(props){

    const { logComponentDisplay, setLogComponentDisplay } = useContext(LoginContext)
    function logDisplay() {
        setLogComponentDisplay(!logComponentDisplay)
    }

let [nameInput,setNameInput]=useState("") ;
    function nameInputFun (e) {
         setNameInput (e.target.value);
    }
    let [emailInput,setEmailInput]=useState("");
    function emailInputFun (e) {
         setEmailInput (e.target.value);
    };
    let [passInput,setPassInput]=useState("");
    function passInputFun(e) {
        setPassInput( e.target.value);
    }
    
let [SignupSuccess ,setSignupSuccess]=useState();
    function signupBtn(e){
        e.preventDefault();
        let signupData = {
            nameInput : nameInput,
            emailInput: emailInput,
            passInput : passInput,
        }
        props.signupInputFun(signupData);
        setSignupSuccess(<p>Signup Successfull</p>) ;
        setNameInput(""); setEmailInput("");setPassInput("")
    }

    return (

        <div >
            
   <form  className="signup" onSubmit={signupBtn}>
   <div id="close" onClick={logDisplay}><img src={closebtn} alt="close" /></div>
            <h2>SignUp</h2>
                <label>UserName  </label><input type="text" maxLength={12} onChange={nameInputFun} value={nameInput} required/>
                <label>Email  </label><input type="email" onChange={emailInputFun} value={emailInput} required/>
                        <label>Password  </label><input type="password" onChange={passInputFun} value={passInput} required />
            <button type="submit">Signup</button>
           <div className="success"> {SignupSuccess}</div>
            <button id="loginbtn" onClick={() => props.setSwitchPage(!props.switchPage) }>go to Login Page</button>
            </form>
   
        </div>
    )
}

export default SignupPage;