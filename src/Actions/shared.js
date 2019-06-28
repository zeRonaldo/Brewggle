import { searchBeers, searchAllBeers, getBeer } from '../Utils/PunkApi';
import { setBeers } from './Beers';
import { setBeer } from './Beer';
import { setLoading } from './Search';

export function AllBeersToList() {
    return(dispatch) => {
        dispatch(setLoading(true))
        return searchAllBeers()
            .then((response) => {
                dispatch(setBeers(response))
                dispatch(setLoading(false))
            })
    }
}


export function searchedBeersToList(query, query_type) {
    return(dispatch) => {
        dispatch(setLoading(true))
        return searchBeers(query, query_type)
            .then((result) => {
                dispatch(setBeers(result))
                dispatch(setLoading(false))
            })
            
            
    }
}


export function getBeerById(id) {
    return(dispatch) => {
        dispatch(setLoading(true))
        return getBeer(id)
            .then((response) => {
                dispatch(setBeer(response))
                dispatch(setLoading(false))
            })
    }
}