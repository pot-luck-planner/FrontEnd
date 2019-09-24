
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

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

//Posting Actions
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

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
            // id: data.id,
            name: data.name,
            // host_id: data.host_id,
            // host_name: data.host_name,
            date: data.date,
            time: data.time,
            location: data.location
        }
    }
};

export const deleteEvent = id => ({
    type: DELETE_EVENT,
    payload: {
        id
    }
});