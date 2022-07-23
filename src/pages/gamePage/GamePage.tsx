import { Container, Col, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import Card from '../../components/Card/Card';
import styles from './GamePage.module.scss';
import { animals, colors } from '../../utils/data';
import useTypeSelector from '../../hooks/useTypeSelector';
import shuffleArray from '../../utils/utils';

function GamePage() {
  
  const {cardsType, difficulty} = useTypeSelector(state => state.settings);

  const createLayout = (cardsArr: Array<JSX.Element>) => {
    const copyArr = cardsArr;
    const content: Array<JSX.Element> = [];
    
    for (let i = 0; i < difficulty / 4; i += 1) {
      content.push(<Row key={nanoid()} className='pt-3 w-50 m-auto'>{copyArr.splice(0, 4)}</Row>)
    }
    
    return content;
  }
  
  const createCards = () => {
    let content: Array<JSX.Element> = [];
    let cnt = 0;
    
    for (let i = 0; i < difficulty; i += 1) {
      
      content.push(<Col key={nanoid()}><Card src={cardsType === 'colors' ? colors[cnt] : `url(/animals/${animals[cnt]})` } /></Col>)
      
      if (cnt === 7) {
        cnt = 0;
      } else {
        cnt += 1;
      }
    }
    
    content = shuffleArray(content);
    content = createLayout(content);
    return content;
  }
  
  return (
    <Container className={`${styles.container} w-75`}>
      <h2>Game page</h2>
      {createCards()}
    </Container>
  )
}

export default GamePage;
