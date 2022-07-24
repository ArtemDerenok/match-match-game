import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import question from '../../assets/icons/question.png';
import star from '../../assets/icons/star.png';
import setting from '../../assets/icons/setting.png'
import MenuItem from '../MenuItem/MenuItem';
import useTypeSelector from '../../hooks/useTypeSelector';
import { StatusApp } from '../../types/interfaces';
import Avatar from '../Avatar/Avatar';

interface HeaderProps {
  handleShow: () => void,
}

function Header({handleShow}: HeaderProps) {
  const {statusApp} = useTypeSelector(state => state.statusApp);
  const currentUser = useTypeSelector(state => state.users.currentUser);
  const navigate = useNavigate();
  
  let content;
  
  switch(statusApp) {
    case StatusApp.START_GAME:
      content = <Button variant='light' onClick={() => navigate('game')} className={styles.register_button}>Start game</Button>;
      break;
    case StatusApp.STOP_GAME:
      content = <Button onClick={() => navigate('/')} variant='light' className={styles.register_button}>Stop game</Button>;
      break;
    default:
      content = <Button onClick={handleShow} variant='light' className={styles.register_button} >Register new player</Button>
  }
  
  return (
    <Navbar bg='primary' className='w-75 mx-auto'>
      <Container>
        <Row className="w-100 aligns-items-center"> 
          <Col xs={3}>
            <div className={styles.logo}>
              <div className={styles.top}>
                match
              </div>
              <div className={styles.bottom}>
                match
              </div>
            </div>
          </Col>
          <Col xs={3} className='d-flex justify-content-around'>
            <NavLink to='/' className={({isActive}) => isActive ? styles.active : undefined}><MenuItem img={question} content='About game' /></NavLink>
            <NavLink to='score' className={({isActive}) => isActive ? styles.active : undefined}><MenuItem img={star} content='Best Score' /></NavLink>
            <NavLink to='settings' className={({isActive}) => isActive ? styles.active : undefined}><MenuItem img={setting} content='Gane Settings' /></NavLink>
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            {content}
            {statusApp !== StatusApp.REGISTER ? <Avatar src={currentUser.avatar} firstName={currentUser.firstName} /> : null}
          </Col>
        </Row>
      </Container>
      </Navbar>
  )
}

export default Header;
