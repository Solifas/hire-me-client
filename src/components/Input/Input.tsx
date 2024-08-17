import { TextField } from '@material-ui/core'
import styles from './Input.module.scss'

interface InputProps {
    label: string
    form: any,
    type?: string
}

const Input = (props: InputProps) => {
    const { label, type, form } = props;
    return (
        <TextField
            label={label}
            variant='outlined'
            className={styles.container}
            {...form.register(label)}
            type={type}
        />
    )
}

export default Input