import { TextField } from "@mui/material";
import Button from "../../components/Button/Button"
import { useModal } from "../../context/ModalProvider";
import Modal from "../common/Modal"
import styles from './EditModal.module.scss'

const EditModal = () => {
    const modal = useModal();
    return (
        <Modal isOpen={true}>
            <div className={styles.aboutHeader}>
                Edit About
            </div>
            <TextField
                id="filled-multiline-flexible"
                label="Edit Description"
                multiline
                rows={4}
                maxRows={4}
                variant="filled"
            />
            <Button label="Save" onClick={() => modal?.hide()} />
        </Modal>
    )
}

export default EditModal