import React, { useState } from "react";
import "./Header.css"
import ExpandHeader from "./ExpandHeader";


function Header(props){
    
    function inputData(allData){
        props.inputData(allData)
    }
    
   
    
    let [list,setlist] =useState()
    let [expensebtn,setexpensebtn] =useState( <button id="addbtn" onClick={Showlist}>Add new Expence</button>)

    function Showlist(){
        setexpensebtn()
   setlist(<div><ExpandHeader inputData={inputData}/> <button className="closebtn" onClick={close}>Close</button></div>)
    }

    function close(){
        setlist()
        setexpensebtn( <button id="addbtn" onClick={Showlist}>Add new Expense</button>)
    }

    return(
        <div className="header">
          {list}  
          {expensebtn}
    </div>
    )
}

export default Header;