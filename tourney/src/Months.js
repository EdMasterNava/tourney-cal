import React from "react";
import './Months.css';

function Months(props){
    return (
        <React.Fragment>
            <div id="month-container">
                {props.monthData.months.map((month, index) => {
                    return  <button className="month-button"
                                    id={index}
                                    onClick={props.handleMonth}
                                    stlye={props.monthData.selectedMonth === index ? props.monthData.monthSelected : props.monthData.monthNotSelected}>
                                {month}
                            </button>
                })}

            </div>
        </React.Fragment>
    )
}

export default Months;