export const SET_BEER = 'SET_BEER'

export function setBeer(beer) {
    return {
        type: SET_BEER,
        beer
    }
}