import {SET_QUERY, SET_QUERY_TYPE} from '../Actions/Search'

export default function search( state = {query: '', query_type: 'beer_name'}, action) {
    switch (action.type){
        case SET_QUERY:
            return {
                ...state,
                query: action.query
            }
        case SET_QUERY_TYPE:
            return {
                ...state,
                query_type: action.query_type
            }
        default:
            return state
    }
}