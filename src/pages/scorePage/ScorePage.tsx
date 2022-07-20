import { Container } from 'react-bootstrap';
import { nanoid } from 'nanoid'
import { useEffect } from 'react';
import styles from './ScorePage.module.scss';
import useTypeSelector from '../../hooks/useTypeSelector';
import ScoreItem from '../../components/ScoreItem/ScoreItem';
import { fetchUsers } from '../../redux/slices/usersSlice';
import useAppDispatch from '../../hooks/useAppDispatch';


function ScorePage() {
  const users = useTypeSelector(state => state.users.users);
  const dispatch = useAppDispatch();
  
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Best players</h2>
      {users.map(elem => <ScoreItem key={nanoid()} firstName={elem.firstName} lastName={elem.lastName} email={elem.email} score={elem.score} avatarBase64={elem.avatar} />)}
      
    </Container>
  )
}

export default ScorePage;
