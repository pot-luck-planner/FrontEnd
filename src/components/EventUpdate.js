import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RegBase, Form, RegLgd, Label, Input, RegBorder, RegBtn} from './RegForm';
import { getEvent, updateEvent } from '../actions';

const EventUpdate = props => {
    const [newEvent, setEvent] = useState({
        id:"",
        name:"",
        date:"",
        time:"",
        location:""
    });

    
    let id = props.match.params.id

    useEffect(() => {
       getEvent(id).then(res => {
           setEvent({ ...res.data})
       })
    },[ id])

    const handleChange = e => {
        setEvent({
            ...newEvent,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        updateEvent( id, {
            name: newEvent.name,
            date: newEvent.date,
            time: newEvent.time,
            location: newEvent.location
        });
        setEvent({
            name: "",
            date: "",
            time: "",
            location: "",
        });
        props.history.push('/events')

        
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
                    value={newEvent.name}
                    name='name'
                    placeholder='Event Name' /><br />
                </Label>
                <Label  htmlFor='date'>Event Date:<br />
                    <Input
                    onChange={handleChange}
                    value={newEvent.date}
                    name='date'
                    placeholder='Event date' /><br />
                </Label>
                <Label  htmlFor='time'>Event Time:<br />
                    <Input
                    onChange={handleChange}
                    value={newEvent.time}
                    name='time'
                    placeholder='Event Time' /><br />
                </Label>
                <Label  htmlFor='location'>Event Location:<br />
                    <Input
                    onChange={handleChange}
                    value={newEvent.location}
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

export default EventUpdate

