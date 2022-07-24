import { Container, Col, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Timer from '../../components/Timer/Timer';
import styles from './GamePage.module.scss';
import { animals, colors } from '../../utils/data';
import useTypeSelector from '../../hooks/useTypeSelector';
import shuffleArray from '../../utils/utils';
import useAppDispatch from '../../hooks/useAppDispatch';
import { resetAnswers, setRightAnswer, setWrongAnswer } from '../../redux/slices/gameLogicSlice';
import { setScore } from '../../redux/slices/usersSlice';
import { setStatusApp } from '../../redux/slices/statusAppSlice';
import { StatusApp } from '../../types/interfaces';
import EndGameModal from '../../components/EngGameModal/EndGameModal';



function GamePage() {
  const [time, setTime] = useState(120000);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const {cardsType, difficulty} = useTypeSelector(state => state.settings);
  const [modalShow, setModalShow] = useState(false);
  const gameLogic = useTypeSelector(state => state.gameLogic);
  const dispatch = useAppDispatch();

  const calcScore = () => {
    const result = ((gameLogic.rightAnswer + gameLogic.wrongAnswer) - gameLogic.wrongAnswer) * 100 - ((Math.floor((120000 / 1000) % 60) - Math.floor((time / 1000) % 60)) * 10);
    dispatch(setScore(result));
  }
  
  const handleTime = (num: number) => {
    setTime(num);
  }
  
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
      
      content.push(<Col key={nanoid()}><Card src={cardsType === 'colors' ? colors[cnt] : `url(/animals/${animals[cnt]})`} /></Col>)
      
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
    
  
  useEffect(() => {
    if(gameLogic.secondAnswer) {
      if (gameLogic.firstAnswer === gameLogic.secondAnswer) {
        dispatch(setRightAnswer());
        calcScore();
      } else {
        dispatch(setWrongAnswer());
      }
      dispatch(resetAnswers());
    }
  }, [gameLogic.secondAnswer])
  
  
  useEffect(() => {
    if (time === 0) {
      setModalShow(true);
    }
    if ((gameLogic.gameCnt === 8 && difficulty === 16) || (gameLogic.gameCnt === 18 && difficulty === 36)) {
      setModalShow(true);
    }
  }, [gameLogic.gameCnt, time])
  
  useEffect(() => {
    setCards(createCards());
    dispatch(setStatusApp(StatusApp.STOP_GAME));
 }, [])
    
  return (
    <Container className={`${styles.container} w-75`}>
      <Timer time={time} setTime={handleTime} />
      {cards}
      <EndGameModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  )
}

export default GamePage;
