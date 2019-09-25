import React from 'react';
import { addEvent } from '../actions';
import { connect } from 'react-redux';
import { RegBase, Form, RegLgd, Label, Input, RegBorder, RegBtn } from './RegForm';

class EventForm extends React.Component {
    state = {
        // id: '',
        name: '',
        // host_id: '',
        // host_name: '',
        date: '',
        time: '',
        location: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Add Event Props", this.state)
        if (this.state.name.trim() && this.state.date.trim() && this.state.time.trim() && this.state.location.trim()) {
            this.props.onAddEvent(this.state);
            
        };
    };

    handleReset = () => {
        this.setState({
 
            name: '',
            date: '',
            time: '',
            location: ''
        });
    };

    render() {
        return (
            <RegBase>
                <Form 
                className="RegForm"
                onSubmit = {this.handleSubmit}>
                    <RegBorder>
                        <RegLgd>Add an Event</RegLgd>
                        <Label htmlFor="name">Event Name<br />
                            <Input
                                type="text"
                                placeholder="Name of Event"
                                className = "form-control"
                                name = "name"
                                onChange = { this.handleInputChange }
                                value = { this.state.name }
                            /><br />
                        </Label>
                   
                        <Label htmlFor='date'>Date of Event<br />
                            <Input
                                type="text"
                                placeholder="Date of Event"
                                className = "form-control"
                                name = "date"
                                onChange = { this.handleInputChange }
                                 value = { this.state.date }
                            /><br />
                        </Label>
                        <Label htmlFor='time'>Time of Event<br />
                            <Input
                                type="text"
                                placeholder="Time of Event"
                                className = "form-control"
                                name = "time"
                                onChange = { this.handleInputChange }
                                value = { this.state.time }
                            /><br />
                        </Label>
                        <Label htmlFor='location'>Location of Event<br />
                            <Input
                                type="text"
                                placeholder="Location of Event"
                                className = "form-control"
                                name = "location"
                                onChange = { this.handleInputChange }
                                value = { this.state.location }
                            /><br />
                        </Label>
                        <div className="form-group">
                            <RegBtn>Add Event</RegBtn>
                            <RegBtn onClick={ this.handleReset }>Reset Fields</RegBtn>
                        </div>
                    </RegBorder>
                </Form>
            </RegBase>
        );
    };
};

const mapdispatchToProps = dispatch => {
    return {
        onAddEvent: event => {
            dispatch(addEvent(event));
        }
    };
};

export default connect(
    null,
    mapdispatchToProps
)(EventForm);