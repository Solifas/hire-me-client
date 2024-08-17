import { set, useForm } from "react-hook-form";
import { LoginPayload } from "../../types/LoginPayload";
import { useLoginUserMutation } from "../../api/apiSlice";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthActions from "../../hooks/useAuthActions";
import useConfigurationActions from "../../hooks/useConfigurationActions";
import { ModalContext, useModal } from "../../context/ModalProvider";

const useLoginPageController = () => {
    const navigate = useNavigate();
    const auth = useAuthActions();
    const configuration = useConfigurationActions();
    const [loginUser, data] = useLoginUserMutation();
    const modal = useModal();

    useEffect(() => {
        const isSuccess = data.isSuccess;
        if (isSuccess) {
            configuration.showLoader(false);
            auth.setCurrentUser(data.data);
            navigate('/home');
        }
        if (data.isError) {
            configuration.showLoader(false);
            if ('data' in data.error) {
                const error: any = data?.error?.data
                if ('error' in error)
                    auth.setErrorMessage(error.error);
            }
            modal?.show('error');
        }

    }, [auth, configuration, data, navigate]);

    const form = useForm();
    const handleLogin = (event: any) => {
        event.preventDefault();
        form.handleSubmit((data) => {
            configuration.showLoader(true);
            const loginData: LoginPayload = {
                userName: data.Username,
                password: data.Password
            }
            loginUser(loginData);
        })();
    }

    return {
        form,
        handleLogin
    };
}

export default useLoginPageController;