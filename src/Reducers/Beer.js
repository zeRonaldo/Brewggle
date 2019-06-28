import {SET_BEER} from '../Actions/Beer'

export default function beer( state = null, action) {
    switch (action.type){
        case SET_BEER:
            return action.beer
        default:
            return state
    }
}