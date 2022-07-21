import { Container } from 'react-bootstrap';
import Card from '../../components/Card/Card';
import styles from './GamePage.module.scss';

function GamePage() {
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Game page</h2>
      <Card />
    </Container>
  )
}

export default GamePage;
