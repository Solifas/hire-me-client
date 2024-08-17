import styles from './LoginPage.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useLoginPageController from './LoginPageController';
import ErrorModal from '../../modals/Error/ErrorModal';

const LoginPage = () => {
    const { form, handleLogin } = useLoginPageController();
    return (
        <form className={styles.container} onSubmit={handleLogin} >
            <h1 className={styles.header}>Hire Me</h1>
            <Input label='Username' form={form} />
            <Input label='Password' form={form} />
            <br />
            <Button label='Login' type='submit' customClass={styles.button} />
        </form>
    )
}

export default LoginPage;