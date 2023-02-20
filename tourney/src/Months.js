import React from "react";
import './Months.css';

function Months(props){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'All'];
    const monthNotSelected = { "background": "#4F5454" };    
    const monthSelected = { "background": "#181A1C" };
    const selectedMonth = props.monthData.selectedMonth;
    return (
        <React.Fragment>
            <div id="month-container">
                {months.map((month, index) => {
                    return  <button className="month-button"
                                    id={index}
                                    onClick={props.handleMonth}
                                    style={selectedMonth == index ? monthSelected : monthNotSelected}>
                                {month}
                            </button>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Months;