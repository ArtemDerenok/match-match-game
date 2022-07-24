import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypeSelector from '../../hooks/useTypeSelector';
import { resetAllSettings } from '../../redux/slices/gameLogicSlice';
import { setStatusApp } from '../../redux/slices/statusAppSlice';
import { StatusApp } from '../../types/interfaces';
import styles from './PageNotFound.module.scss';

function PageNotFound() {
  const {currentUser} = useTypeSelector(state => state.users);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (currentUser.firstName) {
      dispatch(setStatusApp(StatusApp.START_GAME))
      dispatch(resetAllSettings());
    }
  }, [])
  
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Page not found</h2>
    </Container>
  )
}

export default PageNotFound;
