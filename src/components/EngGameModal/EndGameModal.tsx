import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import styles from './EndGameModal.module.scss';
import useTypeSelector from '../../hooks/useTypeSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { resetAllSettings } from '../../redux/slices/gameLogicSlice';
import { updateUser } from '../../redux/slices/usersSlice';

interface IEngGameModalProps {
  show: boolean,
  onHide: () => void,
}

function EndGameModal({show, onHide}: IEngGameModalProps) {
  const {currentUser} = useTypeSelector(state => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return (
    <Modal
    show={show}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <p>You have scored {currentUser.score} points</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
        dispatch(resetAllSettings());
        dispatch(updateUser(currentUser));
        onHide();
        navigate('../score');
      }} className='m-auto' >Ok</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default EndGameModal;
