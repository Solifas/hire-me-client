import { Input, OutlinedInput } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import React from 'react'
import styles from './ProfileUpdatePage.module.scss'

const ProfileUpdatePage = () => {
    return (
        <div className={styles.profileUpdateContainer}>
            <div>ProfileUpdatePage</div>
            <Input placeholder="Title..." />
            <TextField
                id="filled-multiline-flexible"
                label="Edit Description"
                multiline
                rows={4}
                maxRows={4}
                variant="filled"
            />
        </div>

    )
}

export default ProfileUpdatePage