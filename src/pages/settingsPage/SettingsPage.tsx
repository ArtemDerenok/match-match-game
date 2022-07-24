import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { useEffect } from 'react';
import styles from './SettingsPage.module.scss';
import { setCardsType, setDifficulty } from '../../redux/slices/settingsSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypeSelector from '../../hooks/useTypeSelector';
import { setStatusApp } from '../../redux/slices/statusAppSlice';
import { StatusApp } from '../../types/interfaces';


function SettingsPage() {
  const {currentUser} = useTypeSelector(state => state.users);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (currentUser.firstName) {
      dispatch(setStatusApp(StatusApp.START_GAME))
    }
  }, [])
  
  const handleSettingsTypeCards = (e: string | null) => {
    if (e) dispatch(setCardsType(e));
  }
  
  const handleSettingsDifficulty = (e: string | null) => {
    if (e) dispatch(setDifficulty(+e));
  }
  
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Game cards</h2>
      <DropdownButton onSelect={(e) => handleSettingsTypeCards(e)} id="dropdown-first-button" title="select game cards type" variant='light' className={styles.dropDownBtn}>
        <Dropdown.Item eventKey='colors'>Colors</Dropdown.Item>
        <Dropdown.Item eventKey='animals'>Animals</Dropdown.Item>
      </DropdownButton>
      <h2>Difficulty</h2>
      <DropdownButton onSelect={(e) => handleSettingsDifficulty(e)} id="dropdown-second-button" title="select game type" variant='light' className={styles.dropDownBtn}>
        <Dropdown.Item eventKey={16}>4x4</Dropdown.Item>
        <Dropdown.Item eventKey={36}>6x6</Dropdown.Item>
      </DropdownButton>
    </Container>
  )
}

export default SettingsPage;
