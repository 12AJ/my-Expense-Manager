import React from "react";

function FilterDateList(props) {

    let filterYr = (e) => {
        props.fromFilterYear(e.target.value)
    }
    let filterMonths = (e) => {
        props.fromFilterMonth(e.target.value)
    }
    let filterDate = (e) => {
        props.fromFilterDate(e.target.value)
    }

    let dateNumbers=[];
for(let i=0; i<32; i++){
     dateNumbers[i] = i;
}

let yearNumbers=[];
for(let i=2010; i <= new Date().getFullYear(); i++){
     yearNumbers[i] = i;
}

    return (
        <div className="filterDiv">
            <span className="yearText">Filter by</span>

            <span className="yearlist">

           <select onChange={filterDate} defaultValue={"allDates"} >
                <option value="allDates">All Dates</option>
                {dateNumbers.map((data)=>{
                  return   <option value={data}>{data}</option>
                })}
                
            </select>
            <select onChange={filterMonths} defaultValue={"allMonths"} >
                <option value="allMonths">All Months</option>
                <option value="January">january</option>
                <option value="February">february</option>
                <option value="March">march</option>
                <option value="April">april</option>
                <option value="May">may</option>
                <option value="June">june</option>
                <option value="July">july</option>
                <option value="August">august</option>
                <option value="September">september</option>
                <option value="Octomber">octomber</option>
                <option value="November">november</option>
                <option value="December">december</option>
            </select>

            <select onChange={filterYr} defaultValue={new Date().getFullYear()} >
                <option value="allYear">All Year</option>
                {yearNumbers.map((data)=>{
                  return   <option value={data}>{data}</option>
                })}
               
            </select>
            </span>
            
        </div>

    )
}

export default FilterDateList;