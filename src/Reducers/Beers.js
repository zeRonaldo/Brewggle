import {SET_BEERS} from '../Actions/Beers'

export default function beers( state = [], action) {
    let beers = action.beers
    switch (action.type){
        case SET_BEERS:
            return {
                ...beers 
            }
        
        default:
            return state
    }
}