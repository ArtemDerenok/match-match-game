import { Container } from 'react-bootstrap';
import { nanoid } from 'nanoid'
import styles from './ScorePage.module.scss';
import useTypeSelector from '../../hooks/useTypeSelector';
import ScoreItem from '../../components/ScoreItem/ScoreItem';


function ScorePage() {
  const users = useTypeSelector(state => state.users);
  
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Best players</h2>
      {users.map(elem => <ScoreItem key={nanoid()} firstName={elem.firstName} lastName={elem.lastName} email={elem.email} score={elem.score} />)}
      
    </Container>
  )
}

export default ScorePage;
