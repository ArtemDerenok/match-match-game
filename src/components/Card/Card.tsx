import { useState, useEffect, useRef } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypeSelector from '../../hooks/useTypeSelector';
import { setFirstAnswer, setSecondAnswer, setBlock, removeBlock } from '../../redux/slices/gameLogicSlice';
import styles from './Card.module.scss';

interface ICardProps {
  src: string,
}

function Card({src}: ICardProps) {
  const gameLogic = useTypeSelector(state => state.gameLogic);
  const [isSelected, setIsSelected] = useState(false);
  const [isDeletedFromGame, setIsDeletedFromGame] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  
  const flipCard = (e: HTMLDivElement) => {
    e.classList.add(`${styles.flipped}`);
  }
  
  useEffect(() => {
     if (gameLogic.wrongAnswer && !isDeletedFromGame) {
      setIsSelected(false);
      setTimeout(() => {
        cardRef.current?.classList.remove(`${styles.flipped}`)
        dispatch(removeBlock());
      }, 1000)
    }
  }, [gameLogic.wrongAnswer])
  
  useEffect(() => {
    if (gameLogic.gameCnt) {
      if (isSelected) {
        setIsDeletedFromGame(true)
        dispatch(removeBlock());
      }
    } 
  }, [gameLogic.gameCnt])
  
  return (
    <div className={styles.cardContainer}>
      <div ref={cardRef} role='button' tabIndex={0} className={styles.flipCard} onKeyUp={(e) => flipCard(e.currentTarget)} onClick={(e) => {
        if(!isSelected && !gameLogic.isBlockCards) {
          setIsSelected(true);
          flipCard(e.currentTarget);
          if(!gameLogic.firstAnswer) {
            dispatch(setFirstAnswer(src))
          } else {
            dispatch(setBlock());
            dispatch(setSecondAnswer(src));
          }
        }
        }}>
    <div className={styles.cardFront}> </div>
    <div className={styles.cardBack} style={{background: src, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} > </div>
  </div>
    </div>
  )
}

export default Card;
