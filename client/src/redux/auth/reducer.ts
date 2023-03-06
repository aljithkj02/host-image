const token = localStorage.getItem('token') || '';
const name = localStorage.getItem('name') || 'User';
const isAuth = (token) ? true : false;

type defaultDataType = {
    token: string,
    isAuth: boolean,
    name: string,
    loading: boolean
}

const defaultData: defaultDataType = {
    isAuth,
    token,
    loading: false,
    name
}

const authReducer = (state = defaultData, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                isAuth: true,
                loading: false,
                name: action.payload.name
            }
        case 'LOGOUT': 
            return {
                ...state,
                isAuth: false,
                token: '',
                name: 'User'
            }
        case 'LOADING_ON':
            return {
                ...state,
                loading: true
            }
        case 'LOADING_OFF':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer;