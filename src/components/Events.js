import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions';
import Event from './Event';


const Events = ({ getEvents, isFetching, ...props }) => {
    useEffect(() => {
        getEvents();
    }, [getEvents]);

    if (isFetching) {
        return <h3>Loading list of hosted Events</h3>;
    }
    console.log("Event List", props.events)
    return (
        <div>
            <h1>List of Your Hosted Events:</h1>
            {props.events.map(item => (
                <Event  
                    name = {item.name}
                    key = {item.id} 
                    id = {item.id} 
                    // host_id = {item.host_id}
                    host_name = {item.host_name}
                    date = {item.date}
                    time = {item.time}
                    location = {item.location}
                />
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        events: state.events,
        isFetching: state.isFetching,
        error: state.error,
        id: state.id,
        name: state.name,
        // host_id: state.host_id,
        host_name: state.host_name,
        date: state.date,
        time: state.time,
        location: state.locations
    };
};

export default connect(
    mapStateToProps,
    { getEvents }
)(Events);