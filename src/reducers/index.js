import {
    FETCHING_EVENTS_START,
    FETCHING_EVENTS_SUCCESS,
    FETCHING_EVENTS_FAILURE,
    ADD_EVENT,
    DELETE_EVENT
} from '../actions';

export const initialState = {
    events: [],
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
                        // id: action.payload.id,
                        name: action.payload.name,
                        // host_id: action.payload.host_id,
                        host_name: action.payload.host_name,
                        date: action.payload.date,
                        time: action.payload.time,
                        location: action.payload.location
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
        
        case ADD_EVENT:
            return {...state,
            events:[
                ...state.events,
                {
                // id: action.payload.id,
                name: action.payload.name,
                // host_id: action.payload.host_id,
                // host_name: action.payload.host_name,
                date: action.payload.date,
                time: action.payload.time,
                location: action.payload.location}
            ]};
        
        case DELETE_EVENT:
            return state.filter(event => event.id !==action.payload.id);

        default:
            return state;
    }
};