import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../actions'
import styled from 'styled-components';



const EventDiv = styled.div`
width: 40%;
align-items: center;
padding: 2rem;
margin-top: 2rem;
margin-bottom: 2rem;
border-radius: 5px;
`;

const Event = props => {
    console.log("Event Data", props)

    const removeEvent = (event) => {
        console.log("Remove Props", props)
        deleteEvent(event)
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
                <Button color='green'>Update Event</Button>
            </Link>
            <Button 
                color='red'
                onClick = {removeEvent}>
                    Delete Event
            </Button>
            
            
            

        </EventDiv>
    )
}

export default Event;