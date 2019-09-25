import React from 'react';
import { Card, Button, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../actions'
import styled from 'styled-components';
import { EventDiv } from './Event'


const Invite = props => {
    console.log("Invite Data", props)

    return (
        <EventDiv>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Description>Invited By: {props.host}</Card.Description>
                    <Dropdown text = "Food to Bring">
                        <Dropdown.Menu>
                        <Dropdown.Item text={props.food} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Content>
            </Card>
        </EventDiv>
    )
}

export default Invite;