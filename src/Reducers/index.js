import { combineReducers } from 'redux'
import beer from './Beer'
import beers from './Beers'
import search from './Search'

export default combineReducers({
    beer,
    beers,
    search,
})