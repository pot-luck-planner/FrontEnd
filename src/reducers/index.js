import {
    FETCHING_EVENTS_START,
    FETCHING_EVENTS_SUCCESS,
    FETCHING_EVENTS_FAILURE
} from '../actions';

export const initialState = {
    events: [{
        id: 1,
        name: "Picnic",
        host_id: 1,
        host_name: "Thorrr",
        date: "10/2/2019",
        time: "12 pm",
        location: "The Zoo"
    }],
    isFetching: false,
    error: ""
};

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_EVENTS_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_EVENTS_SUCCESS:
            return {
                ...state,
                events: [
                    ...state.events,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        host_id: action.payload.host_id,
                        host_name: action.payload.host_name,
                        date: action.payload.date,
                        time: action.payload.time,
                        locations: action.payload.location
                    }
                ],
                isFetching: false,
                events: action.payload,
                error: ""
            };
        case FETCHING_EVENTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "Could not fetch events"
            }
            default:
                return state;
    }
};