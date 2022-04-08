import React, { useContext } from "react";
import { LoginContext } from "../UserContext";
import ExpenseComponent from "../ExpenseComponent/ExpenseComponent"
import "./Home.css"
import appSample from "../../components/img/appSample.png"
import appSample2 from "../../components/img/appSample2.png"

function Home() {

    const { security,setLogComponentDisplay} = useContext(LoginContext)

    function loginFromHome(){
        setLogComponentDisplay("inline-block")
    }

    return (
        <div className="mainHome">
            {
                security ?
                    <ExpenseComponent />
                    :
                    <div className="home">
                        <div className="polygon"></div>
                        <div className="mainHeading">
                        <h1>Now Manage your Expenses</h1>
                        <h1>at one place</h1>
                        </div>
                        <div className="home1">
                             <div className="homeText">
                                 <h2>Manage your Expenses better with My Expense Manager</h2>
                                 <p>One power solution to improve your productivity, keep you happy and save your time and money. This web app have graph Functionality which visualize your expense data and also you can filter the list according to the date to save your time. </p>
                                 </div> 
                                  <img src={appSample} alt="appSample" />
                                  </div>
                                  <div className="home2">
                             <div className="homeText">
                                 <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, earum!</h2>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum placeat quo  obcaecati minus dignissimos quia aspernatur reiciendis dolore ad nemo corrupti a provident incidunt in fugit harum voluptates. Deleniti nemo, corrupti autem rem quam nobis a ad culpa corporis sint nam, error numquam tationemuptatum officia, quaerat neque distinctio asperiores architecto modi odit. Aspernatur asperiores iure voluptatibus natus est facere provident ipsam! Dolores praesentium libero at, sunt aut odio alias. Id, ad. </p>
                                 </div> 
                                  <img src={appSample2} alt="appSample" />
                                  </div>
                                  <div className="getStarted" onClick={loginFromHome}><h2>Signup & Login to Get Started</h2></div>
                    </div>
            }
        </div>
    )
}

export default Home;