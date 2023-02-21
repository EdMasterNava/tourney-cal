import React from "react";
import './List.css';

function List(props){
    const displayEventList = props.displayEventList;
    const displayDate = (obj) => {
        if(obj["event_start_date"] === obj["event_end_date"]){
            return new Date(obj["event_start_date"]).toDateString();
        }else{
            return new Date(obj["event_start_date"]).toDateString() + ' - ' 
                + new Date(obj["event_end_date"]).toDateString();
        }
    }
    return (
        <React.Fragment>
            {displayEventList.map(obj => {
                    return(
                        <button className="event-block" id={obj["id"]}>
                            <div id="block-container">
                                <p id="event-date">
                                    {displayDate(obj)}
                                </p>
                                <p id="event-name">
                                    {obj["event_name"]}
                                </p>
                                <p id="venue">
                                    {obj["venue"]}
                                </p>
                            </div>
                        </button>
                    )
                })}
        </React.Fragment>
    )
}

export default List;