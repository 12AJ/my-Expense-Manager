import React, { useState } from "react";
import './ExpenseComponent.css'

import Header from "./components/header/Header";
import FilterDateList from "./components/datelist/FilterDateList";
import Graph from "./components/graphs/Graphs";
import Datelist from "./components/datelist/Datelist"
import { myList } from "./ArrayData";



function ExpenseComponent() {

// form user new input  list data 
    let [dateData, setDateData] = useState(myList)
    function inputData(allData) {
        setDateData(dateData => [allData, ...dateData])
    }

    // for filtered date coming from user
    let [filterDate, setFilterDate] = useState("allDates")
    function fromFilterDate(changeDate){
        setFilterDate(changeDate)
    }

    //for filtered months coming from user
    let [filterMonth, setFilterMonth] = useState("allMonths")
    function fromFilterMonth(changeMonth){
        setFilterMonth(changeMonth)
    }
// for filtered year coming from user
    let [filterYear, setFilterYear] = useState(new Date().getFullYear())
    function fromFilterYear(changeYear) {
        setFilterYear(changeYear)
    }
    
//to filter the list acording to year selected by user
    let filteryr = dateData.filter((data) => {
        if (filterYear == "allYear") {
            return data;
        }
        else if(data.date.getFullYear() == filterYear) {
            return data.date.getFullYear() == filterYear;
        }
        else{
            return 0;
        }

    })


    let filterMnth = filteryr.filter((data)=>{
        if(filterMonth == "allMonths"){
            return data;
        }
        else if (data.date.toLocaleString("en-us", { month: "long" }) == filterMonth){
         return   data.date.toLocaleString("en-us", { month: "long" }) == filterMonth
        }
        else{
            return 0;
        }
    })

    let filterDt = filterMnth.filter((data)=>{
        if(filterDate == "allDates" ){
            return data;
        }
        else if(data.date.getDate() == filterDate){
            return data.date.getDate() == filterDate;
        }
        else{
            return 0;
        }
    })
    
      //to sort by - >
const sortBy = arr => {
    arr.sort((a, b) => {
        return new Date(a.date).getDate() - new Date(b.date).getDate();
     });

     arr.sort((a, b) => {
        return  new Date(a.date).getMonth() -  new Date(b.date).getMonth() ;
     });
 
      arr.sort((a, b) => {
        return  new Date(b.date).getFullYear() - new Date(a.date).getFullYear() ;
     });
 };

 sortBy(filterDt);
 
   
 

    return (
        <div className="container">
            <Header inputData={inputData} />
            <div className="main">
                <FilterDateList fromFilterYear={fromFilterYear} fromFilterMonth={fromFilterMonth} fromFilterDate={fromFilterDate}/>
                <Graph filteryr = {filteryr} />
                {
                    filterDt == 0  && <h3 className="nodataf">No Data Found</h3>
                }
                {
                  filterDt.map(list => {
                            return (
                                <div>
                                    <Datelist key={list.id} dates={list.date} item={list.item} price={list.price} />
                                </div>
                            )  
                    })
                }
            </div>
        </div>

    )
};

export default ExpenseComponent;