import { useMemo } from 'react'
import { useAppDispatch } from './appHelper';
import { setError, setUser } from '../store/authSlice';
import { LoginResponse } from '../types/LoginResponse';

export interface AuthProps {
    setErrorMessage: (error: string) => void;
    setCurrentUser: (loginResponse: LoginResponse) => void;
}

const useAuthActions = (): AuthProps => {
    const dispatch = useAppDispatch();

    return useMemo(() => ({
        setCurrentUser: (loginResponse) => {
            dispatch(setUser(loginResponse))
        },
        setErrorMessage: (error) => {
            dispatch(setError(error))
        }
    }), [dispatch]);
}

export default useAuthActions;