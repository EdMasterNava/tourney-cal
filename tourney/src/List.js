import React from "react";
import './List.css';

function List(props){
    const displayEventList = props.listData.displayEventList;
    const months = props.listData.months;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const displayDate = (obj) => {
        const start = new Date(obj["event_start_date"]);
        const end = new Date(obj["event_end_date"]);
        if(obj["event_start_date"] === obj["event_end_date"]){
            return `${start.getDate()} ${months[start.getMonth()]}` ;
        }else{
            return `${start.getDate()} - ${end.getDate()} ${months[end.getMonth()]}`;
        }
    }
    const displayDayOfWeek = (obj) => {
        const start = new Date(obj["event_start_date"]);
        const end = new Date(obj["event_end_date"]);
        if(obj["event_start_date"] === obj["event_end_date"]){
            return `${days[start.getDay()]}` ;
        }else{
            return `${days[start.getDay()]} - ${days[end.getDay()]}`;
        }
    }
    return (
        <React.Fragment>
            {displayEventList.map(obj => {
                    return(
                        <button className="event-block" id={obj["id"]}>
                            <div id="block-container">
                                <div id="date-container">
                                    <p id="event-date">
                                        {displayDate(obj)}
                                    </p>
                                    <p id="week-day">
                                        {displayDayOfWeek(obj)}
                                    </p>
                                </div>
                                <div id="text-container">
                                    <p id="event-name">
                                        {obj["event_name"]}
                                    </p>
                                    <p id="venue">
                                        {obj["venue"]}
                                    </p>
                                </div>
                            </div>
                        </button>
                    )
                })}
        </React.Fragment>
    )
}

export default List;