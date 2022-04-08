import React from "react";
import "./Graphs.css"


function Graph(props) {

    let graphMonths = [
        { months: "jan", value: 0 },
        { months: "feb", value: 0 },
        { months: "mar", value: 0 },
        { months: "apr", value: 0 },
        { months: "may", value: 0 },
        { months: "jun", value: 0 },
        { months: "jul", value: 0 },
        { months: "aug", value: 0 },
        { months: "sep", value: 0 },
        { months: "oct", value: 0 },
        { months: "nov", value: 0 },
        { months: "dec", value: 0 },
    ]

    // adding values in value
    for (let data of props.filteryr) {
        let month = data.date.getMonth();
        graphMonths[month].value += data.price;
    }

//getting greatest value from Year
    let maxValueYr = props.filteryr.map(data=>{
        return data.price
     })
     maxValueYr = Math.max(...maxValueYr) ;

     //dividing each month by max value of year
    for (let data of graphMonths){
        data.value = (data.value/maxValueYr)*100;
    }

    return (
        <div className="visuals">
            <div className="visuals2">
            {graphMonths.map(data => {
                return (
                    <span className="columns">
                        <div className="innercolumns">
                            <div className="ininnercolumns" id={data.months} style={{ height: data.value + "%" }}></div>
                        </div>
                        <p>{data.months}</p>
                    </span>
                )
            })}
            </div>
           
        </div>

    )
}

export default Graph;