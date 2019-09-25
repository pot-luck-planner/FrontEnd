import React from 'react';
import { addEvent } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const EveBase = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const EveDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const EveForm = styled.form`
    display: flex;
    overflow: hidden;
    background-color: #F0F2F2;
    align-items: center;
    text-align: left;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
`;
const EveLgd = styled.legend`
    font-size: 1.5rem;
`;
const EveLabel = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
const EveInput = styled.input`
    display: inline;
    border: 1px solid #999999;
    border-radius: 3px;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const EveBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem;
`;
const EveBtn = styled.button`
    // margin: 0 20% 0 20%;
    width: 5rem;
    height: 3rem;
    background-color: #30BF45;
    border: 1px solid #999999;
    border-radius: 5px;
    color: white;

    :hover{
        background-color: #C4F2D0;
        color: black;
    }
`;

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
        if (this.state.name.trim() && this.state.date.trim() && this.state.time.trim() && this.state.location.trim()) {
            this.props.onAddEvent(this.state);
            this.handleReset();
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
            <EveBase>
                <EveForm onSubmit = {this.handleSubmit}>
                    <EveBorder className="form-group">
                        <EveLgd>Add an Event</EveLgd>
                        <EveInput
                            type="text"
                            placeholder="Name of Event"
                            className = "form-control"
                            name = "name"
                            onChange = { this.handleInputChange }
                            value = { this.state.name }
                        />
                    
                    {/* <div className="form-group">
                        <input
                            type="text"
                            placeholder="Host ID"
                            className = "form-control"
                            name = "host_id"
                            onChange = { this.handleInputChange }
                            value = { this.state.host_id }
                        />
                    </div> */}
                    {/* <div className="form-group">
                        <input
                            type="text"
                            placeholder="Host Name"
                            className = "form-control"
                            name = "host_name"
                            onChange = { this.handleInputChange }
                            value = { this.state.host_name } */}
                        {/* />
                    </div> */}
                    
                        <EveInput
                            type="text"
                            placeholder="Date of Event"
                            className = "form-control"
                            name = "date"
                            onChange = { this.handleInputChange }
                            value = { this.state.date }
                        />
                    
                        <EveInput
                            type="text"
                            placeholder="Time of Event"
                            className = "form-control"
                            name = "time"
                            onChange = { this.handleInputChange }
                            value = { this.state.time }
                        />
                    
                    
                        <EveInput
                            type="text"
                            placeholder="Location of Event"
                            className = "form-control"
                            name = "location"
                            onChange = { this.handleInputChange }
                            value = { this.state.location }
                        />
                   
                    {/* <div className="form-group">
                        <input
                            type="text"
                            placeholder="Event ID"
                            className = "form-control"
                            name = "id"
                            onChange = { this.handleInputChange }
                            value = { this.state.id }
                        />
                    </div> */}
                    <EveDiv>
                        <EveBtn type="submit" className="btn btun-primary">Add Event</EveBtn>
                        <EveBtn type="button" className="btn btn-warning" onClick={ this.handleReset }>Reset Fields</EveBtn>
                    </EveDiv>
                    </EveBorder>
                </EveForm>
            </EveBase>
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