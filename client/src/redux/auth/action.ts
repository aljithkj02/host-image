
export const login = (token: string) => (dispatch, getState) => {
    return dispatch({
        type: 'LOGIN',
        payload: token
    })
}

export const logout = () => (dispatch, getState) => {
    return dispatch({
        type: 'LOGOUT'
    })
}

export const loadingOn = () => (dispatch, getState) => {
    return dispatch({
        type: 'LOADING_ON'
    })
}

export const loadingOff = () => (dispatch, getState) => {
    return dispatch({
        type: 'LOADING_OFF'
    })
}