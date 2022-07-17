import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './SettingsPage.module.scss';

function SettingsPage() {
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Game cards</h2>
      <DropdownButton id="dropdown-first-button" title="select game cards type" variant='light' className={styles.dropDownBtn}>
        <Dropdown.Item href="#/action-1">Colors</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Animals</Dropdown.Item>
      </DropdownButton>
      <h2>Difficulty</h2>
      <DropdownButton id="dropdown-second-button" title="select game type" variant='light' className={styles.dropDownBtn}>
        <Dropdown.Item href="#/action-1">4x4</Dropdown.Item>
        <Dropdown.Item href="#/action-2">6x6</Dropdown.Item>
      </DropdownButton>
    </Container>
  )
}

export default SettingsPage;
