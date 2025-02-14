import React from 'react'
import Modal from '../common/Modal'
import Button from '../../components/Button/Button'
import { useModal } from '../../context/ModalProvider';
import useConfigurationActions from '../../hooks/useConfigurationActions';
// import { useNavigate } from 'react-router-dom';

const FirstTimeModal = () => {
  const modal = useModal();
  const configuration = useConfigurationActions();

  const handleUpdate = () => {
    configuration.showLoader(false);
    modal?.hide();
  }


  return (
    <Modal isOpen={true} >
      <div>
        <h3>Welcome to Hire Me!</h3>
        <div>
          <span>Let's get started by filling out your profile.</span>
        </div>
        <br />
        <Button label="Update my Profile" onClick={handleUpdate} />
      </div>
    </Modal>
  )
}

export default FirstTimeModal