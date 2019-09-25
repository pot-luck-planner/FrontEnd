import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInvites } from '../actions';
import Invite from './Invite';
import { EventListBase } from './Events'
import { RegLgd } from './RegForm';



const Invites = ({ getInvites, isFetching, ...props }) => {
    console.log("Invite props", props)
    
    useEffect(() => {
        getInvites();
    }, []);

    if (isFetching) {
        console.log("Fired")
        return <h3>Loading list of your invites</h3>;
    }
    console.log("Invite List", props)
    return (
        <EventListBase>
            <RegLgd>Events You're Invited to:</RegLgd>
            {props.invites && props.invites.map(item => (
                <Invite 
                    name = {item.name}
                    key = {item.id} 
                    id = {item.id} 
                    host = {item.host}
                    host_id = {item.host_id}
                    account_id = {item.account_id}
                    username = {item.username}
                    firstname = {item.firstname}
                    lastname = {item.lastname}
                    food = {item.food}
                    notes = {item.notes}
                    rsvp = {item.rsvp}
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
        id: state.id,
        name: state.name,
        host_id: state.host_id,
        account_id: state.account_id,
        username: state.username,
        firstname: state.firstname,
        lastname: state.firstname,
        food: state.food,
        notes: state.notes,
        rsvp: state.rsvp
    };
};

export default connect(
    mapStateToProps,
    { getInvites }
)(Invites);