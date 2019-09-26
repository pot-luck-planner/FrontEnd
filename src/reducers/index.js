import {
    FETCHING_EVENTS_START,
    FETCHING_EVENTS_SUCCESS,
    FETCHING_EVENTS_FAILURE,
    FETCHING_INVITES_START,
    FETCHING_INVITES_SUCCESS,
    FETCHING_INVITES_FAILURE,
    ADD_EVENT,
    DELETING_EVENT,
    DELETED_EVENT,
    DELETING_EVENT_ERROR,
    FETCHING_EVENT_START,
    FETCHING_EVENT_SUCCESS,
    FETCHING_EVENT_FAILURE,
    UPDATE_EVENT_START,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAILURE,
    RSVP_START,
    RSVP_SUCCESS,
    RSVP_FAILURE


} from '../actions';

export const initialState = {
    events: [],
    invites: [],
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

        case FETCHING_INVITES_START:
            return {
                ...state,
                isFetching: true,
                error:""
            };

        case FETCHING_INVITES_SUCCESS:
            console.log("Action Payload", action.payload)
            return {
                ...state,
                invites: [
                    ...state.invites,
                    {
                        id: action.payload.event_id,
                        name: action.payload.name,
                        host_id: action.payload.host_id,
                        host: action.payload.host,
                        account_id: action.payload.account_id,
                        username: action.payload.username,
                        firstname: action.payload.firstname,
                        food: action.payload.food,
                        notes: action.payload.notes,
                        rsvp: action.payload.rsvp,
                        date: action.payload.date,
                        time: action.payload.time,
                        location: action.payload.location
                        
                    }
                ],
                invites: action.payload,
                isFetching: false,
                error:""
            }

        case FETCHING_INVITES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "Could not get your invites"
            };
        
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
       
        case DELETING_EVENT:
            return {
                ...state,
                isFetching: true,
                error: ""
            };

        case DELETED_EVENT:
            
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

        case DELETING_EVENT_ERROR:
            return {
                ...state,
                isFetching: false,
                error: "Unable to delete the event!"
            };

        case RSVP_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };

        case RSVP_SUCCESS:
            return {
                ...state,
                invites:[
                    ...state.invites,
                    {
                        food: action.payload.food,
                        rsvp: action.payload.rsvp

                    }
                ]

            };
        
        case RSVP_FAILURE:
            return {
                ...state,
                isFecthing: false,
                error: "Unable to submit RSVP!"
            }

        default:
            return state;
    }
};