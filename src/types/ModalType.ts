import { ModalProps } from "../modals/common/ModalProps";
import ErrorModal from "../modals/Error/ErrorModal";
import EditModal from "../modals/Edit/EditModal";
import EditWorkExperienceModal from "../modals/EditWorkExperience/EditWorkExperienceModal";
import FirstTimeModal from "../modals/FirstTimeModal/FirstTimeModal";

export type ModalType = 'error' | 'edit' | 'editWorkExperience' | 'firstTime';

export const MODALS: Record<ModalType, React.FunctionComponent<ModalProps>> = {

    error: ErrorModal,
    edit: EditModal,
    editWorkExperience: EditWorkExperienceModal,
    firstTime: FirstTimeModal
}