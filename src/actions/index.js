
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
//get all events
export const FETCHING_EVENTS_START = "FETCHING_EVENTS_START";
export const FETCHING_EVENTS_SUCCESS = "FETCHING_EVENTS_SUCCESS";
export const FETCHING_EVENTS_FAILURE = "FETCHING_EVENTS_FAILURE";


export const getEvents = () => dispatch => {
    dispatch({ type: FETCHING_EVENTS_START });
    axiosWithAuth()
        .get("/events")
        .then(res => {
            console.log(res);
        dispatch({ type: FETCHING_EVENTS_SUCCESS, payload: res.data});
        })
        .catch(err => console.log(err.response))
}

//get one event
export const FETCHING_EVENT_START = "FETCHING_EVENT_START";
export const FETCHING_EVENT_SUCCESS = "FETCHING_EVENT_SUCCESS";
export const FETCHING_EVENT_FAILURE = "FETCHING_EVENT_FAILURE";

export const getEvent = (id) => dispatch => {
    dispatch({ type: FETCHING_EVENT_START });
    return axiosWithAuth()
    .get(`/events/${id}`)
    .then(res => {
        dispatch({ type: FETCHING_EVENT_SUCCESS, payload: res.data});
        console.log("getEvent", res.data)
    })

    .catch(err => {
        dispatch({ type: FETCHING_EVENT_FAILURE, payload: err.response.data.message})
    })
}

//Add an event
export const ADD_EVENT = "ADD_EVENT";


export const addEvent = ({ name, date, time, location}) => {
    return (dispatch) => {
        return axiosWithAuth().post("/events", { name, date, time, location})
            .then(res => {
                dispatch(addEventSuccess(res.data))
                // console.log(res)
            })
            .catch(err => console.log(err.response));
    };
};

export const addEventSuccess = (data) => {
    return {
        type: ADD_EVENT,
        payload: {
            id: data.id,
            name: data.name,
            // host_id: data.host_id,
            // host_name: data.host_name,
            date: data.date,
            time: data.time,
            location: data.location
        }
    }
};

//update an event
export const UPDATE_EVENT_START = "UPDATE_EVENT_START";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";
export const UPDATE_EVENT_FAILURE = "UPDATE_EVENT_FAILURE";

export const updateEvent = (dispatch, id, event) => {
    dispatch({ type: UPDATE_EVENT_START });
    axiosWithAuth()
        .put(`/events/${id}`, event)
        .then(res => {
            dispatch({ type: UPDATE_EVENT_SUCCESS, payload: {id, event} });
        })
        .catch(err => {
            dispatch({ type: UPDATE_EVENT_FAILURE, payload: err.response.data.message})
        })
}
//delete an event
export const DELETE_EVENT = "DELETE_EVENT";

export const deleteEvent = id => ({
    type: DELETE_EVENT,
    payload: {
        id
    }
});