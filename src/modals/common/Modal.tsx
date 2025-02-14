import React, { PropsWithChildren } from 'react'
import { ModalProps } from './ModalProps'
import { Dialog, SwipeableDrawer } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useModal } from '../../context/ModalProvider';
import styles from './Modal.module.scss'

const Modal = (props: PropsWithChildren<ModalProps>) => {
    const isMobile = false;
    const modal = useModal();
    return (
        isMobile ?
            <SwipeableDrawer onOpen={() => { }} onClose={() => { }} anchor='bottom' >
                <div><Close /></div>

                {props.children}
            </SwipeableDrawer>
            :
            <Dialog
                open={props.isOpen}
                keepMounted={true}

            >
                <div className={styles.modal}>
                    <div className={styles.closeButton} onClick={() => modal?.hide()}>
                        <Close />
                    </div>
                    {props.children}
                </div>
            </Dialog>
    )
}

export default Modal