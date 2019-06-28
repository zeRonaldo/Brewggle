export const SET_BEERS = 'SET_BEERS'


export function setBeers(beers) {
    return {
        type: SET_BEERS,
        beers
    }
}