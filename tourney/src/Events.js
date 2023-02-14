import React, { useState } from 'react';
import { jsonObect } from './jsonObect';
import Months from './Months';

function Events(){
    //state
    const [eventListData, setEventListData] = useState({
        completeEventList: jsonObect,
        selectedMonth: 12,
        months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'All'],
        monthSelected: { background: '#181A1C' },
        monthNotSelected: { background: '#4F5454' }
    });
    const handleMonth = (event) => {
        setEventListData({...eventListData, selectedMonth: event.currentTarget.id}, () => filterEventsByDate());
    }
    const filterEventsByDate = () => {
        if(eventListData.selectedMonth === 12){
            setEventListData({...eventListData, displayEventList: eventListData.completeEventList});
        }else{
            const newArr = [];
            eventListData.completeEventList.forEach(obj => {
                if(setEventListData.selectedMonth === new Date(obj["event_start_date"]).getMonth()){
                    newArr.push(obj);
                }
            });
            setEventListData({...eventListData, displayEventList: newArr});
        }
    }
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
            
        <div className='events-container'>
            <div className='upcoming'>
                <h1>Upcoming Events</h1>
            </div>

            <Months monthData={eventListData} handleMonth={handleMonth}/>
            {eventListData.completeEventList.map(item => {
                    return(
                        <button className="eventBlock" id={item['id']}>
                            <div id="event-name">
                                <p id="event-date">
                                    {item["event_start_date"] === item["event_end_date"] ? 
                                    new Date(item["event_start_date"]).toDateString() : 
                                    new Date(item["event_start_date"]).toDateString() + ' - ' + 
                                    new Date(item["event_end_date"]).toDateString()}
                                </p>
                                <p id="title">
                                    {item["event_name"]}
                                </p>
                                <p id="venue">
                                    {item["venue"]}
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
