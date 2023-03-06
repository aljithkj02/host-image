
export const login = (token: string, name: string) => (dispatch, getState) => {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    return dispatch({
        type: 'LOGIN',
        payload: {
            token,
            name
        }
    })
}

export const logout = () => (dispatch, getState) => {
    localStorage.removeItem('token');
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