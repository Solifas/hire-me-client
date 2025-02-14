import { useMemo } from 'react'
import { useAppDispatch } from './appHelper';
import { setCanEditProfile, setLoaderMessage, showLoading } from '../store/configurationSlice';
interface ConfigurationProps {
    showLoader: (isLoading: boolean) => void;
    setLoadMessage: (loadMessage: string) => void;
    setCanEditProfile: (canEditProfile: boolean) => void;
}


const useConfigurationActions = (): ConfigurationProps => {
    const dispatch = useAppDispatch();
    return useMemo(() => ({
        showLoader: (isLoading) => { dispatch(showLoading(isLoading)) },
        setLoadMessage: (loaderMessage) => { dispatch(setLoaderMessage(loaderMessage)) },
        setCanEditProfile: (canEditProfile) => { dispatch(setCanEditProfile(canEditProfile)) },
    }), [dispatch]);
}

export default useConfigurationActions