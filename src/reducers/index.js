import {
    FETCHING_EVENTS_START,
    FETCHING_EVENTS_SUCCESS,
    FETCHING_EVENTS_FAILURE,
    ADD_EVENT,
    DELETE_EVENT,
    FETCHING_EVENT_START,
    FETCHING_EVENT_SUCCESS,
    FETCHING_EVENT_FAILURE,
    UPDATE_EVENT_START,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAILURE


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
                        id: action.payload.id,
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

        case FETCHING_EVENT_START:
            return {
                ...state,
                isFetching:true,
                error:""
            }
        
        case FETCHING_EVENT_SUCCESS:
            return {
                ...state,
                event: {
                    id: action.payload.id,
                    name: action.payload.name,
                    host_name: action.payload.host_name,
                    date: action.payload.date,
                    time: action.payload.time,
                    location: action.payload.location
                },
            isFetching: false,
            event: action.payload,
            error: ""       

            };
        
        case FETCHING_EVENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "Couldn't load the event!"
            };

        case UPDATE_EVENT_START:
            return {
                ...state,
                isFetching: true,
                error:""
            };
        
        case UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                events:[
                    ...state.events,
                    {
                        name: action.payload.name,
                        date: action.payload.date,
                        time: action.payload.time,
                        location: action.payload.location
                    }
                ]};

        case UPDATE_EVENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "Couldn't update the event!"
            };

        

        
        
        case DELETE_EVENT:
            return state.filter(event => event.id !==action.payload.id);

        default:
            return state;
    }
};