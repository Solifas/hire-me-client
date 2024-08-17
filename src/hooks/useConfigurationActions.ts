import React, { useMemo } from 'react'
import { useAppDispatch } from './appHelper';
import { setLoaderMessage, showLoading } from '../store/configurationSlice';
interface ConfigurationProps {
    showLoader: (isLoading: boolean) => void;
    setLoadMessage: (loadMessage: string) => void;
}


const useConfigurationActions = (): ConfigurationProps => {
    const dispatch = useAppDispatch();
    return useMemo(() => ({
        showLoader: (isLoading) => { dispatch(showLoading(isLoading)) },
        setLoadMessage: (loaderMessage) => { dispatch(setLoaderMessage(loaderMessage)) },
    }), [dispatch]);
}

export default useConfigurationActions