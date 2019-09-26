import React from 'react';
import { Card, Button, Dropdown } from 'semantic-ui-react';
import { rsvpEvent } from '../actions'
import { EventDiv } from './Event';
import { connect } from 'react-redux';



const Invite = props => {
    console.log("Invite Props", props)
    
    const handleRSVP = e => {
        let id = props.id;
        e.preventDefault();
        props.onRSVP(id)
    }

    return (
        <EventDiv>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.date} {props.time} {props.location}</Card.Meta>
                    <Card.Description>Invited By: {props.host}</Card.Description>
                    <Dropdown text = "Food to Bring">
                        <Dropdown.Menu>
                        <Dropdown.Item text={props.food} />
                        </Dropdown.Menu>
                    </Dropdown>
                   

                </Card.Content>
                <Button color='blue'
                        onClick = {handleRSVP}>RSVP</Button>
            </Card>
        </EventDiv>
    )
}

const mapdispatchtoProps = dispatch => {
    return {
        onRSVP: (id) => {
            dispatch(rsvpEvent(id))
        }
    }
}
export default connect(
    null,
    mapdispatchtoProps
)(Invite);

