import React, { useState, useEffect } from 'react';
import { RegBase, Form, RegLgd, Label, Input, RegBorder, RegBtn} from './RegForm';
import { getEvent, updateEvent } from '../actions';
import { connect } from 'react-redux';

const EventUpdate = props => {
    
    const [event, setEvent] = useState({
        name:"",
        date:"",
        time:"",
        location:""
    });


    useEffect(() => {
        
        let id = props.history.location.state.id
        props.onGetEvent(id)

    },[props])

    const handleChange = e => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        let id = props.history.location.state.id
        e.preventDefault();

        if (
            event.name !== "" &&
            event.date !== "" &&
            event.time !== "" &&
            event.location !== ""
        ) {
            props.onUpdateEvent(id, event);
        }
    };

    

    return (
        <RegBase className='RegBase'>
            <Form
            className='RegForm'
            onSubmit={handleSubmit}>
                <RegBorder>
                <RegLgd>Update Event</RegLgd>
                <Label  htmlFor='name'>Event Name:<br />
                    <Input
                    onChange={handleChange}
                    value={event.name}
                    name='name'
                    placeholder='Event Name' /><br />
                </Label>
                <Label  htmlFor='date'>Event Date:<br />
                    <Input
                    onChange={handleChange}
                    value={event.date}
                    name='date'
                    placeholder='Event date' /><br />
                </Label>
                <Label  htmlFor='time'>Event Time:<br />
                    <Input
                    onChange={handleChange}
                    value={event.time}
                    name='time'
                    placeholder='Event Time' /><br />
                </Label>
                <Label  htmlFor='location'>Event Location:<br />
                    <Input
                    onChange={handleChange}
                    value={event.location}
                    name='location'
                    placeholder='Event Location' /><br />
                </Label>
                <br/>
                <RegBtn>Update Event</RegBtn>
                </RegBorder>
            </Form>
        </RegBase>
    )
}

const mapdispatchtoProps = dispatch => {
    return {
        onUpdateEvent: (id, event) => {
            dispatch(updateEvent(id, event));
        },
        onGetEvent: id => {
            dispatch(getEvent(id))
        }
    };
    
};


export default connect(
    null,
    mapdispatchtoProps
)(EventUpdate);

