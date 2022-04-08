import React from "react";
import "./Datelist.css"


function DateList(props) {


    return (

        <div className="Content">
            <div className="date" ><p>{props.dates.toLocaleString("en-us", {month: "long" })}</p><p id="dateNumber">{props.dates.getDate()}</p><p>{props.dates.getFullYear()}</p></div>
            <p className="items" >{props.item}</p><p className="price">₹ {props.price}</p>

        </div>
    )
}

export default DateList;