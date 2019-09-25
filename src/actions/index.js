
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom'
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

//get events you're invited to
export const FETCHING_INVITES_START = "FETCHING_INVITES_START";
export const FETCHING_INVITES_SUCCESS = "FETCHING_INVITES_SUCCESS";
export const FETCHING_INVITES_FAILURE = "FETCHING_INVITES_FAILURE";

export const getInvites = (id) => dispatch => {
    dispatch({ type: FETCHING_INVITES_START});
    axiosWithAuth()
        .get(`/events/invites/${id}`)
        .then (res => {
            console.log("getInvites Data", res);
                dispatch({type: FETCHING_INVITES_SUCCESS, payload: res.data})
        })
}

//get one event
export const FETCHING_EVENT_START = "FETCHING_EVENT_START";
export const FETCHING_EVENT_SUCCESS = "FETCHING_EVENT_SUCCESS";
export const FETCHING_EVENT_FAILURE = "FETCHING_EVENT_FAILURE";

export const getEvent = () => dispatch => {
    dispatch({ type: FETCHING_EVENT_START });
     axiosWithAuth()
    .get(`/events/:id`)
    .then(res => {

        dispatch({ type: FETCHING_EVENT_SUCCESS, payload: res.data});
        console.log("getEvent", res)
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

export const updateEvent = (id, { name, date, time, location}) => {
    return (dispatch) => {
     return axiosWithAuth()
        .put(`/events/${id}`, {name, date, time, location})
        .then(res => {
            console.log("Update Data", res.data)
            dispatch(updateEventSuccess(res.data));
        })
        .catch(err => {
            dispatch({ type: UPDATE_EVENT_FAILURE, payload: err.response.data.message})
        })
}};

export const updateEventSuccess = (data) => {
    return {
        type: UPDATE_EVENT_SUCCESS,
        payload: {
            // id: data.id,
            name: data.name,
            date: data.date,
            time: data.time,
            location: data.location
        }
    }
}
//delete an event
export const DELETING_EVENT = "DELETING_EVENT";
export const DELETED_EVENT = "DELETED_EVENT"
export const DELETING_EVENT_ERROR = "DELETING_EVENT_ERROR";

export const deleteEvent = (id)=> dispatch => {
    dispatch({ type: DELETING_EVENT });
    axiosWithAuth()
      .delete(`/events/${id}`)
      .then(res => {
        dispatch({ type: DELETED_EVENT, payload: id });
      })
      
      .catch(err => {
        dispatch({
          type: DELETING_EVENT_ERROR,
          payload: err.response.data.message
        });
      });
  };