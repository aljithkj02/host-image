const token = localStorage.getItem('token') || '';
const isAuth = (token) ? true : false;

type defaultDataType = {
    token: string,
    isAuth: boolean
}

const defaultData: defaultDataType = {
    isAuth,
    token
}

const authReducer = (state = defaultData, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.token,
                isAuth: true
            }
        case 'LOGOUT': 
            return {
                ...state,
                isAuth: action.isAuth,
                token: ''
            }
        default:
            return state
    }
}

export default authReducer;