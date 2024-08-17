import { ModalProps } from "../modals/common/ModalProps";
import ErrorModal from "../modals/Error/ErrorModal";
import EditModal from "../modals/Edit/EditModal";

export type ModalType = 'error' | 'edit';

export const MODALS: Record<ModalType, React.FunctionComponent<ModalProps>> = {

    error: ErrorModal,
    edit: EditModal,
}