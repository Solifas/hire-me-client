import { useCallback, useEffect, useMemo } from "react";
import { useGetUsersQuery } from "../../api/apiSlice";
import { useAppSelector } from "../../hooks/appHelper";
import { GetUsersPayload } from "../../types/GetUsersPayload";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { useModal } from "../../context/ModalProvider";
import useConfigurationActions from "../../hooks/useConfigurationActions";
import { usersTestData } from "../../testData/UsersTestData";


const useHomePageController = () => {
    const modal = useModal();
    const configuration = useConfigurationActions();
    const navigate = useNavigate();
    const token = useAppSelector(x => x.auth.loginResponse?.id ?? '');
    const userName = useAppSelector(x => x.auth.loginResponse?.userName);
    const showLoader = useAppSelector(x => x.configuration.showLoading);
    const usersPayload: GetUsersPayload = {
        numberOfUsers: 5,
        token: token
    }

    const onWatchListClick = useCallback(() => {
        modal?.show('firstTime');
    }, [modal]);

    const onGigRequestsClick = useCallback(() => {
        navigate('/gigs');
    }, [navigate]);

    const onHistoryClick = useCallback(() => {
        navigate('/history');
    }, [navigate]);

    const onRegisterClick = () => {
        navigate('/register');
    }

    const onCardClick = useCallback((id: string) => {
        navigate(`profile/${id}`);
    }, [navigate]);

    return useMemo(() => {
        return {
            users: usersTestData,
            userName,
            onWatchListClick,
            onGigRequestsClick,
            onHistoryClick,
            onRegisterClick,
            onCardClick
        }
    }, [onCardClick, onGigRequestsClick, onHistoryClick, onRegisterClick, onWatchListClick, userName])
}

export default useHomePageController;