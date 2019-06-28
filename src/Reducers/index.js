import { combineReducers } from 'redux'
import beer from './Beer'
import beers from './Beers'
import search from './Search'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    beer,
    beers,
    search,
    loadingBar: loadingBarReducer,
})