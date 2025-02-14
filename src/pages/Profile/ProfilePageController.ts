import React from 'react'
import { useModal } from '../../context/ModalProvider';
import { User } from '../../types/User';
import { usersTestData } from '../../testData/UsersTestData';
import { useAppSelector } from '../../hooks/appHelper';

const useProfilePageController = () => {
    const modal = useModal();
    const title = 'Software Developer';

    const user: User = usersTestData[0]; //get the current user's profile

    const canEdit = useAppSelector(x => x.configuration.canEditProfile); //check if its the current user on the selected profile

    const description = 'I am a software developer with 5 years of experience in building web applications using React, Node.js, and MongoDB. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.';
    const onAboutClick = () => {
        modal?.show('edit');
    }

    const onWorkHistoryClick = () => {
        modal?.show('editWorkExperience');
    }

    return {
        user,
        title,
        canEdit,
        description,
        onAboutClick,
        onWorkHistoryClick
    }
}

export default useProfilePageController