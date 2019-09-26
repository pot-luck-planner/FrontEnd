import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInvites } from '../actions';
import Invite from './Invite';
import { EventListBase } from './Events'
import { RegLgd } from './RegForm';



const Invites = ({ getInvites, isFetching, ...props }) => {
    
    useEffect(() => {
        getInvites();
    }, [getInvites]);

    if (isFetching) {
        return <h3>Loading list of your invites</h3>;
    }

    return (
        <EventListBase>
            <RegLgd>Events You're Invited to:</RegLgd>
            {props.invites && props.invites.map(item => (
                <Invite 
                    name = {item.name}
                    key = {item.invite_id} 
                    invite_id = {item.invite_id} 
                    host = {item.host}
                    host_id = {item.host_id}
                    account_id = {item.account_id}
                    username = {item.username}
                    firstname = {item.firstname}
                    lastname = {item.lastname}
                    food = {item.food}
                    notes = {item.notes}
                    rsvp = {item.rsvp}
                    date = {item.date}
                    time = {item.time}
                    location = {item.location}
                    event_id = {item.event_id}
                />
            ))}
        </EventListBase>
    )
};

const mapStateToProps = state => {

    console.log("Map State", state)
    return {
        invites: state.invites,
        isFetching: state.isFetching,
        error: state.error,
        invite_id: state.invite_id,
        name: state.name,
        host_id: state.host_id,
        account_id: state.account_id,
        username: state.username,
        firstname: state.firstname,
        lastname: state.firstname,
        food: state.food,
        notes: state.notes,
        rsvp: state.rsvp,
        date: state.date,
        time: state.time,
        location: state.location,
        event_id: state.event_id
    };
};

export default connect(
    mapStateToProps,
    { getInvites }
)(Invites);

