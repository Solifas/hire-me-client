import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core'
import React from 'react'
import { useModal } from '../../context/ModalProvider';
import { useAppSelector } from '../../hooks/appHelper';
import { ModalProps } from '../common/ModalProps';

const ErrorModal = (props: ModalProps) => {

    const { isOpen } = props;
    const modal = useModal();
    const errorMessage = useAppSelector(x => x.auth.errorMessage);

    const handleClick = () => {
        modal?.hide();
    }

    return (
        <Dialog
            open={isOpen}
            keepMounted={true}
        >
            <DialogTitle>An Error Occurred</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {errorMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick}>Retry</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorModal