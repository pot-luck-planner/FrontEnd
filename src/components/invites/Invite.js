import React, { useEffect, useState } from 'react';
import { Card, Button, Dropdown } from 'semantic-ui-react';
import { rsvpEvent } from '../../actions'
import { EventDiv } from '../events/Event';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth'



const Invite = ({rsvpEvent, ...props}) => {
    const [food, setFood] = useState([]);
    const [newRsvp, setNewRsvp] = useState({rsvp:false, food:""})

    const handleRSVP = e => {
        let id = props.invite_id;
        e.preventDefault();
        setNewRsvp({...newRsvp, rsvp: 1 })
        rsvpEvent(id, {...newRsvp, rsvp: 1 })
        alert(`You have successfully RSVP'd and are bringing ${newRsvp.food} to the pot luck!`)
        window.location.reload();
    }

    const handleFood = async e => {
        e.persist()
        setNewRsvp({food: e.target.textContent})
    }

    
    useEffect(() => {
       getFood();
     }, []);
    function getFood() {
        const id = props.event_id.toString();

     axiosWithAuth()
       .get(`https://potluck-planner-v2.herokuapp.com/events/${id}/food`)
       .then(res => {
           setFood(res.data);
       })
       .catch(err => console.log(err.response));
   }
  
    

    return (
        <EventDiv>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.date} {props.time} {props.location}</Card.Meta>
                    <Card.Description>Invited By: {props.host}</Card.Description>
                    <Dropdown text = {newRsvp.food.length ? newRsvp.food:"Food to Bring"}>
                        <Dropdown.Menu >
                { food.map(food => <Dropdown.Item 
                                    text={`${food.name}`} 
                                    key ={food.id}
                                    onClick = {handleFood}
                                    />) }
                        </Dropdown.Menu>
                    </Dropdown>
                   

                </Card.Content>
                <Button color='blue'
                        onClick = {handleRSVP}>RSVP</Button>
            </Card>
        </EventDiv>
    )
}

const mapStateToProps = state => {


    return {

}
}
export default connect(
    mapStateToProps,
    {rsvpEvent}
)(Invite);

