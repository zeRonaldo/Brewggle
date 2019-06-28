export const SET_QUERY = 'SET_QUERY'
export const SET_QUERY_TYPE = 'SET_QUERY_TYPE'


export function setQuery (query) {
    return {
        type: SET_QUERY,
        query
    }
}

export function setQueryType(query_type) {
    return{
        type: SET_QUERY_TYPE,
        query_type
    }
}
