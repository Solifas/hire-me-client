import Modal from "../common/Modal"
import { TextField } from "@mui/material";
import styles from './EditModal.module.scss'
import Button from "../../components/Button/Button"
import { useModal } from "../../context/ModalProvider";
import { useEffect, useState } from "react";

const EditModal = () => {
    const modal = useModal();
    const [about, setAbout] = useState('')
    const description = 'I am a software developer with 5 years of experience in building web applications using React, Node.js, and MongoDB. I have worked on multiple projects and have experience in developing scalable and maintainable applications. I have a strong understanding of software development principles and best practices. I am passionate about learning new technologies and improving my skills. I am a team player and have experience working in agile teams. I am looking for new opportunities to work on challenging projects and grow as a developer.';

    useEffect(() => {
        setAbout(description);
    }, []);


    const onSave = () => {
        setAbout(about);
        modal?.hide();
    }
    return (
        <Modal isOpen={true}>
            <div className={styles.aboutHeader}>
                Edit About
            </div>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <br />
            <TextField
                id="filled-multiline-flexible"
                multiline
                minRows={4}
                variant="filled"
                value={about}
                onChange={(val) => setAbout(val.target.value)}
            />
            <Button customClass={styles.saveBtn} label="Save" onClick={onSave} />
        </Modal>
    )
}

export default EditModal