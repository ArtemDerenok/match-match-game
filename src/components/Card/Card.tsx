
import styles from './Card.module.scss';

interface ICardProps {
  src: string,
}

function Card({src}: ICardProps) {
  
  
  const flipCard = (e: HTMLDivElement) => {
    e.classList.toggle(`${styles.flipped}`);
  }
  
  return (
    <div className={styles.cardContainer}>
      <div role='button' tabIndex={0} className={styles.flipCard} onKeyUp={(e) => flipCard(e.currentTarget)} onClick={(e) => flipCard(e.currentTarget)}>
    <div className={styles.cardFront}> </div>
    <div className={styles.cardBack} style={{background: src, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}> </div>
  </div>
    </div>
  )
}

export default Card;
