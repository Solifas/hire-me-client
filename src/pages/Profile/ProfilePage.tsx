import { Button } from '@material-ui/core';
import styles from './ProfilePage.module.scss';
import { Edit } from '@mui/icons-material';
import { useModal } from '../../context/ModalProvider';
const ProfilePage = () => {
    const modal = useModal();
    const title = 'Software Developer';

    const description = 'I am a software developer with 5 years of experience in building web applications using React, Node.js, and MongoDB. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.';
    const onAboutClick = () => {
        modal?.show('edit');
    }
    return (
        <div className={styles.headerCard}>
            <h3>{title}</h3>
            <div className={styles.about}>
                <h4>About</h4>
                <div className={styles.editAboutIcon} onClick={onAboutClick}>
                    <Edit />
                </div>
            </div>
            <p>{description}</p>
            <h4>Skills</h4>
            <div className={styles.skills}>
                <span>React, </span>
                <span>Node.js, </span>
                <span>MongoDB </span>
            </div>
            <h4>Work history</h4>
            <div className={styles.workHistory}>
                <h5>{title}</h5>
                <h6>April 2021 - Present</h6>
                <span>Ozow</span>
                <br />
                <span>Cape Town</span>
                <p>{description}</p>
            </div>
            <div>
                <br />
                <Button variant="contained" color="primary">Request Service</Button>
            </div>
        </div>
    )
}

export default ProfilePage