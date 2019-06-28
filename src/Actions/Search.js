export const SET_QUERY = 'SET_QUERY'
export const SET_QUERY_TYPE = 'SET_QUERY_TYPE'
export const SET_LOADING = 'SET_LOADING'

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


export function setLoading (loading) {
    return{
        type: SET_LOADING,
        loading
    }
}
