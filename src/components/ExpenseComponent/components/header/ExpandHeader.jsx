import React, { useState } from "react";
import "./ExpandHeader.css"

function ExpandHeader(props) {


    let [title, settitle] = useState("")
    let [amount, setamount] = useState("0")
    let [date, setdate] = useState("")
console.log (date)
    function Title(e) {
        settitle(e.target.value)
    }

    function Amount(e) {
        setamount(e.target.value)
    }

    function Dates(e) {
        setdate(e.target.value)
    }
    function OnSubmits(e) {
        e.preventDefault();
        const allData = {
            item: title,
            price: amount,
            date: new Date(date),
        }
        settitle("")
        setamount("0")
        setdate("")

        props.inputData(allData)

    }

    return (

        <div>
            <form  onSubmit={OnSubmits}>
                <div className="formContainer" >
                <div className="inputs"> <p>Title</p> <input type="text" onChange={Title} value={title} /></div>
                <div className="inputs"> <p>Amount</p> <input type="number" onChange={Amount} value={amount} required /></div>
                <div className="inputs"><p>Date </p> <input type="date" onChange={Dates} value={date} required /></div>
                </div>

                    <button className="submitbtn" type="Submit" >Add Expense</button>
            </form>

        </div>
    )
}

export default ExpandHeader;