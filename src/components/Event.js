import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';


const EventDiv = styled.div`
width: 40%
`;

const Event = props => {

    return (
        <EventDiv>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.date}, {props.time}, {props.location}</Card.Meta>
                    <Card.Description>Hosted by: {props.host_name}</Card.Description>
                </Card.Content>
            </Card>
            
            

        </EventDiv>
    )
}

export default Event;