import axios from 'axios'
export const FETCH_START = 'FETCH_START;'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';



export const getJokes = () => {
    return(dispatch => {
        dispatch(fetchStart());
        axios.get('https://official-joke-api.appspot.com/random_joke/')
            .then(res => {
                dispatch(fetchSuccess([res.data]))
    })
            .catch(err => 
            dispatch(fetchError()))
    })
}

export const fetchStart = () => {
    return ({type:FETCH_START})
}

export const fetchSuccess = (jokes) => {
    return ({type:FETCH_SUCCESS, payload: jokes})
}

export const fetchError = () => {
    return ({
        type:FETCH_ERROR,
    })
}