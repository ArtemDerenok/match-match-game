import { Container } from 'react-bootstrap';
import styles from './PageNotFound.module.scss';

function PageNotFound() {
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Page not found</h2>
    </Container>
  )
}

export default PageNotFound;
