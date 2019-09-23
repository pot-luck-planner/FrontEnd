import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_EVENTS_START = "FETCHING_EVENTS_START";
export const FETCHING_EVENTS_SUCCESS = "FETCHING_EVENTS_SUCCESS";
export const FETCHING_EVENTS_FAILURE = "FETCHING_EVENTS_FAILURE";

export const getEvents = () => dispatch => {
    dispatch({ type: FETCHING_EVENTS_START });
    axiosWithAuth()
        .get("/events")
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
}