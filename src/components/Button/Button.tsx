import { Button as Btn } from '@material-ui/core';
import styles from './Button.module.scss';

interface ButtonProps {
    label: string,
    customClass?: string,
    type?: 'submit' | 'button',
    onClick?: () => void
}
const Button = (props: ButtonProps) => {
    return (
        <Btn className={`${styles.btn} ${props.customClass}`} variant='contained' color='primary' type={props.type} onClick={props.onClick} >{props.label}</Btn>
    )
}

export default Button;