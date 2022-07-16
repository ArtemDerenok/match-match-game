import { Col, Container, Image, Row } from 'react-bootstrap';
import pointOneImg from '../assets/point-one.png';
import formImg from '../assets/form.png';
import pointTwoImg from '../assets/point-two.png';
import settingImg from '../assets/settings.png';
import pointThreeImg from '../assets/point-three.png';
import cardsImg from '../assets/cards.png';
import styles from './MainPage.module.scss';

function MainPage() {  
  return (
    <Container className={`${styles.container} w-75`}>
      <h2 className='pt-3'>How to play?</h2>
      <Row className='pt-3'>
        <Col>
          <Image src={pointOneImg} alt='registration' />
        </Col>
        <Col className='d-flex justify-content-end'>
          <Image src={formImg} alt='form' />
        </Col>
      </Row>
      <Row className='pt-3'>
        <Col>
          <Image src={pointTwoImg} alt='setting of settings' />
        </Col>
        <Col className='d-flex justify-content-end'>
          <Image src={settingImg} alt='settings' />
        </Col>
      </Row>
      <Row className='pt-3 pb-3'>
        <Col>
          <Image src={pointThreeImg} alt='start game' />
        </Col>
        <Col className='d-flex justify-content-end'>
          <Image src={cardsImg} alt='cards' />
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage;
