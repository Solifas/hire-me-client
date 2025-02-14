import React from 'react'
import { Edit } from '@mui/icons-material';
import styles from './WorkExperience.module.scss';
import { Experience } from '../../types/Experience';
import { useModal } from '../../context/ModalProvider';
import { useAppSelector } from '../../hooks/appHelper';

const WorkExperience = (experience: Experience) => {
    const modal = useModal();
    const { title, companyName, startDate, endDate, description } = experience;
    const canEdit = useAppSelector(x => x.configuration.canEditProfile); //check if its the current user on the selected profile

    const onEdit = () => {
        modal?.show('editWorkExperience');
    }
    return (
        <>
            <div className={styles.workExperienceContainer}>
                <div className={styles.workExperience}>
                    <div className={styles.title}><b>{title}</b></div>
                    <h6>{startDate} - {endDate}</h6>
                    <h5>{companyName}</h5>
                    <span>{description}</span>
                </div>
                {canEdit &&
                    <div className={styles.editAboutIcon} onClick={onEdit}>
                        <Edit />
                    </div>
                }
            </div>
            <br />
            <div className={styles.line}></div>
        </>
    )
}

export default WorkExperience;