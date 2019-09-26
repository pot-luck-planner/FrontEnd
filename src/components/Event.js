import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../actions'
import styled from 'styled-components';
import { connect } from 'react-redux';



export const EventDiv = styled.div`
width: 100%;
align-items: center;
padding: 2rem;
margin-top: 2rem;
margin-bottom: 2rem;
border-radius: 5px;
`;

const Event = props => {
    props.debug && console.log("Event Data", props)

    const handleDelete = e => {
        let id = props.id
        props.onDeleteEvent(id);
        window.location.reload();
    }

    return (
        <EventDiv>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.date}, {props.time}, {props.location}</Card.Meta>
                    <Card.Description>Hosted by: {props.host_name}</Card.Description>
                </Card.Content>
            </Card>

            <Link to = {{
                pathname: `/event/${props.id}/addmenu`,
                state: {
                    name: props.name,
                    food_qty: props.food_qty,
                    category: props.category
                }
            }}>
                <Button color='yellow'>Add Menu</Button>
            </Link>
            <Link to = {{
                
                pathname: `/updateevent/${props.id}`,
                state: {
                    name: props.name,
                    date: props.date,
                    location: props.location,
                    id: props.id,
                    time: props.time
                }
                
            }
            
            }>
                <Button color='green'>Update</Button>
            </Link>
            <Button 
                color='red'
                onClick = {handleDelete}
            >
                    Delete
            </Button>
            <Link to = {{
                pathname: `/invite-user/${props.id}`,
                state: {
                    name: props.name,
                    date: props.date,
                    location: props.location,
                    id: props.id,
                    time: props.time
                }
            }}>
            <Button color='blue'>Invite User</Button>
            </Link>
                
            
            
            

        </EventDiv>
    )
}

const mapdispatchtoProps = dispatch => {
    return {
        onDeleteEvent: (id) => {
            dispatch(deleteEvent(id))
        }
    };
};

export default connect(
    null,
    mapdispatchtoProps
)(Event);