import { useMemo } from "react";
import { useAppSelector } from "../../hooks/appHelper";
import styles from './HomePage.module.scss';
import Card from "../../components/Card/Card";
import { useGetUsersQuery } from "../../api/apiSlice";
import { GetUsersPayload } from "../../types/GetUsersPayload";
import { User } from "../../types/User";
import { alpha, AppBar, Input, InputBase, styled, Toolbar } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const HomePage = () => {
    const token = useAppSelector(x => x.auth.loginResponse?.id) ?? '';
    const usersPayload: GetUsersPayload = {
        numberOfUsers: 5,
        token: token
    }
    // const { data } = useGetUsersQuery(usersPayload, {
    //     skip: !token
    // });

    // const users = useMemo(() => (data?.users), [data]);

    const users: User[] = [{
        firstName: 'John',
        lastName: 'Doe',
        title: 'Software Developer',
        shortDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer. with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        city: 'New York',
        rate: 100,
        showProfile: true,
        contactNumber: 1234567890,
        email: 'john.doe@example.com',
        availability: 'Full Time',
        longDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        experienceYears: 5
    }, {
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'Software Developer',
        shortDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        city: 'New York',
        rate: 5000.00,
        showProfile: true,
        contactNumber: 1234567890,
        email: 'jane.doe@example.com',
        availability: 'Full Time',
        longDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        experienceYears: 5
    }, {
        firstName: 'Pohn',
        lastName: 'Doe',
        title: 'Software Developer',
        shortDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        city: 'New York',
        rate: 100,
        showProfile: true,
        contactNumber: 1234567890,
        email: 'pohn.doe@example.com',
        availability: 'Full Time',
        longDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        experienceYears: 5
    }, {
        firstName: 'Tane',
        lastName: 'Doe',
        title: 'Software Developer',
        shortDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        city: 'New York',
        rate: 100,
        showProfile: true,
        contactNumber: 1234567890,
        email: 'Tohn.doe@example.com',
        availability: 'Full Time',
        longDescription: 'I am a software developer with 5 years of experience in developing web applications using React, Angular, and Node.js. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.',
        experienceYears: 5,
    }];



    return (
        <>
            <AppBar className="">
                <Toolbar className={styles.toolBar}>
                    <span className={styles.title}>Hire Me</span>
                    <div className={styles.rightNav}>
                        <span className={styles.username}>Watch list</span>
                        <span className={styles.username}>Gig Requests</span>
                        <span className={styles.username}>History</span>
                        <span className={styles.username}>Register</span>

                        <span className={styles.username}>UserName</span>
                        {false ? <LoginIcon /> : <PersonOutlineIcon />}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={styles.search}>
                <Input className={styles.searchInput} disableUnderline placeholder="Search..." startAdornment={<SearchIcon />} />
            </div>
            <div className={styles.row}>
                {
                    users?.map((user, index) =>
                        <Card key={index} firstName={user.firstName} lastName={user.lastName} title={user.title}
                            shortDescription={user.shortDescription} city={user.city}
                            rate={user.rate}
                        />
                    )
                }
            </div>
        </>
    )
}

export default HomePage