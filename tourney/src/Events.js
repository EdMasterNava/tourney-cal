import React, { useEffect, useState } from 'react';
import { jsonObject } from './jsonObject';
import Months from './Months';
import './Events.css';

function Events(){
    //state
    const [eventListData, setEventListData] = useState({
        completeEventList: jsonObject,
        displayEventList: jsonObject,
        selectedMonth: 12
    });
    // useEffect(() => {
    //     if(eventListData.selectedMonth === 12){
    //         setEventListData(prev => {
    //             return {...prev, displayEventList: prev.completeEventList}
    //         });
    //         console.log(`displayEvents: ${eventListData.displayEventList}`);
    //     }else{
    //         const newArr = [];
    //         eventListData.completeEventList.forEach(obj => {
    //             if(eventListData.selectedMonth === new Date(obj["event_start_date"]).getMonth()){
    //                 newArr.push(obj);
    //             }
    //         });
    //         setEventListData(prev => {
    //             return {...prev, displayEventList: newArr}
    //         });
    //         console.log(`displayEvents: ${eventListData.displayEventList}`);
    //     }
    // }, [eventListData.selectedMonth]);
    const handleMonth = (event) => {
        console.log(`handleMonth! target.id: ${event.target.id}`);
        setEventListData(prev => {
            return {...prev, selectedMonth: event.target.id}
        });
    }
    // const filterEventsByDate = 
    const getCompleteList = () =>{
        return eventListData.completeEventList;
    }
    //sort not working with array of events
    // const sortEvents = () => {
    //     handleDisplayEventList();
    //     // const sorted = eventListData.displayEventList.sort((a, b) => {
    //     //     return (new Date(a["event_start_date"]).getTime()) - (new Date(b["event_start_date"].getTime()));
    //     // })
    //     return eventListData.displayEventList;
    // };
    return (
        <React.Fragment>
            
        <div id='events-container'>
            <div id='upcoming'>
                <h1>Upcoming Events</h1>
            </div>

            <Months monthData={eventListData} handleMonth={handleMonth}/>
            {eventListData.displayEventList.map(obj => {
                    return(
                        <button className="event-block" id={obj['id']}>
                            <div id="event-name">
                                <p id="event-date">
                                    {obj["event_start_date"] === obj["event_end_date"] ? 
                                        new Date(obj["event_start_date"]).toDateString() : 
                                        new Date(obj["event_start_date"]).toDateString() + ' - ' + 
                                        new Date(obj["event_end_date"]).toDateString()
                                    }
                                </p>
                                <p id="title">
                                    {obj["event_name"]}
                                </p>
                                <p id="venue">
                                    {obj["venue"]}
                                </p>
                            </div>
                        </button>
                    )
                })}
        </div>
        </React.Fragment>
    )
};

export default Events;
