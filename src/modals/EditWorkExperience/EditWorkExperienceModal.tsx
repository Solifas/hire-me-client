import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal';
import { TextField } from '@mui/material';
import Button from '../../components/Button/Button';
import styles from './EditWorkExperienceModal.module.scss'
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppSelector } from '../../hooks/appHelper';
import { useModal } from '../../context/ModalProvider';

const EditWorkExperienceModal = () => {
    const modal = useModal();

    const [title, setTitle] = React.useState('');
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
    const [description, setDescription] = useState('');
    const titleFromState = useAppSelector(state => "Software Developer");
    const descriptionFromState = useAppSelector(state => "Worked on various projects and developed software using various programming languages.");

    const onSave = () => {
        //logic to save via API
        modal?.hide();
    }

    useEffect(() => {
        setTitle(titleFromState);
        setDescription(descriptionFromState)
    }, [titleFromState]);



    return (
        <Modal isOpen={true}>
            <div className={styles.aboutHeader}>
                Edit Work Exprerience
            </div>
            <br />
            <TextField id="outlined-basic" label="Title" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" />
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div >
                    <DatePicker label="Start Date" defaultValue={startDate} onChange={(date) => setStartDate(date)} />
                    <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
            </LocalizationProvider>
            <TextField id="outlined-basic" label="Company" variant="outlined" />
            <TextField
                id="filled-multiline-flexible"
                label="Job Description"
                multiline
                minRows={4}
                variant="filled"
                value={description}
                onChange={(val) => setTitle(val.target.value)}
            />
            <Button customClass={styles.saveBtn} label="Save" onClick={onSave} />
        </Modal>
    )
}

export default EditWorkExperienceModal;