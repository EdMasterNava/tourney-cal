import React, { useEffect, useState } from 'react';
import { jsonObject } from './jsonObject';
import Months from './Months';
import List from './List';
import './Events.css';

function Events(){
    //state
    const [eventListData, setEventListData] = useState({
        completeEventList: jsonObject,
        displayEventList: jsonObject,
        selectedMonth: 12
    });
    //update displayEventList after selectedMonth is updated
    useEffect(() => {
        if(eventListData.selectedMonth == 12){
            setEventListData(prev => {
                return {...prev, displayEventList: prev.completeEventList}
            });
        }else{
            const newArr = [];
            eventListData.completeEventList.forEach(obj => {
                if(eventListData.selectedMonth == new Date(obj["event_start_date"]).getMonth()){
                    newArr.push(obj);
                }
            });
            setEventListData(prev => {
                return {...prev, displayEventList: newArr}
            });
        }
    }, [eventListData.selectedMonth]);
    //update selectedMonth
    const handleMonth = (event) => {
        setEventListData(prev => {
            return {...prev, selectedMonth: event.target.id}
        });
    }
    return (
        <React.Fragment>  
            <div id='events-container'>
                <div id='upcoming'>
                    <h1>Upcoming Events</h1>
                </div>
                <Months monthData={eventListData} handleMonth={handleMonth}/>
                <List displayEventList={eventListData.displayEventList}/>
            </div>
        </React.Fragment>
    )
};

export default Events;
