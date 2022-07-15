import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './Header.module.scss';
import question from '../../assets/icons/question.png';
import star from '../../assets/icons/star.png';
import setting from '../../assets/icons/setting.png'
import MenuItem from '../MenuItem/MenuItem';

function Header() {
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
            <MenuItem img={question} content='About game' />
            <MenuItem img={star} content='Best Score' />
            <MenuItem img={setting} content='Gane Settings' />
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            <Button variant='light' className={styles.register_button} >Register new player</Button>
          </Col>
        </Row>
      </Container>
      </Navbar>
  )
}

export default Header;
