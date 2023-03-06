import { login, logout, loadingOn, loadingOff } from '../redux/auth/action';
import { useDispatch } from 'react-redux';

export const useAction = () => {
    const dispatch = useDispatch();
    return {
        dispatch,
        login,
        logout,
        loadingOff,
        loadingOn
    }
}