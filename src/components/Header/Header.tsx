import styles from './Header.module.scss';
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Toolbar } from '@material-ui/core';
import useHeaderController from './HeaderController';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Header = () => {

    const { userName, onWatchListClick, onGigRequestsClick, onHistoryClick, onRegisterClick, onHomeClick } = useHeaderController();

    return (
        <div className={styles.header}>
            <AppBar>
                <Toolbar className={styles.toolBar}>
                    <span className={styles.title} onClick={onHomeClick} >Hire Me</span>
                    <div className={styles.rightNav}>
                        <span className={styles.username} onClick={onWatchListClick} >Watch list</span>
                        <span className={styles.username} onClick={onGigRequestsClick} >Gig Requests</span>
                        <span className={styles.username} onClick={onHistoryClick} >History</span>
                        <span className={styles.username} onClick={onRegisterClick} >Register</span>
                        {userName && <span className={styles.username}>{userName}</span>}
                        {userName ? <LoginIcon /> : <PersonOutlineIcon />}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={styles.headerSpace}></div>
        </div>
    )
}

export default Header