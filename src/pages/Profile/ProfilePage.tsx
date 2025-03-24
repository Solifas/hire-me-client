import { Button } from '@material-ui/core';
import { Edit } from '@mui/icons-material';
import styles from './ProfilePage.module.scss';
import useProfilePageController from './ProfilePageController';
import WorkExperience from '../../components/Experience/WorkExperience';

const ProfilePage = () => {
    const { user, canEdit, onAboutClick } = useProfilePageController();

    return (
        <div className={styles.headerCard}>
            <div className={styles.innerContainer}>
                <span className={styles.name}><b>{user.firstName} {user.lastName} ({user?.title})</b></span>
                <div className={styles.about}>
                    <span><b>About</b></span>
                    {canEdit &&
                        <div className={styles.editAboutIcon} onClick={onAboutClick}>
                            <Edit />
                        </div>
                    }
                </div>
                <p>{user?.longDescription}</p>
                <h4>Skills</h4>
                <div className={styles.skills}>
                    {user?.skills?.map((skill, index) => <li><span key={index}>{skill}</span></li>)}
                </div>
                <h4>Work history</h4>
                <div className={styles.workHistory}>
                    {user?.workExperience?.map((work, index) => (
                        <WorkExperience
                            key={index}
                            companyName={work.companyName}
                            description={work.description}
                            endDate={work.endDate}
                            startDate={work.startDate}
                            title={work.title}
                            id={work.id}
                        />))
                    }
                </div>
                <div>
                    <br />
                    {!canEdit &&
                        <Button variant="contained" color="primary">Request Service</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage