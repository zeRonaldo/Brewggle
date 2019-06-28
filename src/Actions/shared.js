import {showLoading, hideLoading} from 'react-redux-loading-bar'
import { searchBeers, searchAllBeers, getBeer } from '../Utils/PunkApi';
import { setBeers } from './Beers';
import { setBeer } from './Beer';

export function AllBeersToList() {
    return(dispatch) => {
        dispatch(showLoading())
        return searchAllBeers()
            .then((response) => {
                dispatch(setBeers(response))
                dispatch(hideLoading())
            })
    }
}


export function searchedBeersToList(query, query_type) {
    return(dispatch) => {
        dispatch(showLoading())
        return searchBeers(query, query_type)
            .then((result) => {
                dispatch(setBeers(result))
                dispatch(hideLoading())
            })
            
            
    }
}


export function getBeerById(id) {
    return(dispatch) => {
        dispatch(showLoading())
        return getBeer(id)
            .then((response) => {
                dispatch(setBeer(response))
                dispatch(hideLoading())
            })
    }
}