import React from 'react';
import { addEvent } from '../actions';
import { connect } from 'react-redux';

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
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name of Event"
                            className = "form-control"
                            name = "name"
                            onChange = { this.handleInputChange }
                            value = { this.state.name }
                        />
                    </div>
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
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Date of Event"
                            className = "form-control"
                            name = "date"
                            onChange = { this.handleInputChange }
                            value = { this.state.date }
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Time of Event"
                            className = "form-control"
                            name = "time"
                            onChange = { this.handleInputChange }
                            value = { this.state.time }
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Location of Event"
                            className = "form-control"
                            name = "location"
                            onChange = { this.handleInputChange }
                            value = { this.state.location }
                        />
                    </div>
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
                    <div className="form-group">
                        <button type="submit" className="btn btun-primary">Add Event</button>
                        <button type="button" className="btn btn-warning" onClick={ this.handleReset }>Reset Fields</button>
                    </div>
                </form>
            </div>
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