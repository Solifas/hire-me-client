import { useForm } from "react-hook-form"
import { Form, useNavigate } from "react-router-dom";
import useConfigurationActions from "../../hooks/useConfigurationActions";
import { useModal } from "../../context/ModalProvider";

interface RegisterForm {
    username: string;
    password: string;
    email: string;
};

const RegisterPage = () => {
    const form = useForm<RegisterForm>();
    const navigate = useNavigate();
    const modal = useModal();
    const configuration = useConfigurationActions();

    const onSubmit = (data: RegisterForm) => {
        configuration.showLoader(true);
        modal?.show('firstTime');
        navigate('/profile/1');
    }

    return (
        //give me 3 textboxes 1 with lable username the other password, and the other email with beautiful scss
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <div>
                <label>Username</label>
                <input {...form.register("username")} type="text" />
            </div>
            <div>
                <label>Email</label>
                <input {...form.register("email")} type="email" />
            </div>
            <div>
                <label>Password</label>
                <input {...form.register("password")} type="password" />
            </div>
            <button>Register</button>
        </form>
    )
}

export default RegisterPage