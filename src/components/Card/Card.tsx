/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './Card.module.scss';
import elephant from '../../assets/animals/001-elephant.png';

function Card() {
  
  const flipCard = (e: HTMLDivElement) => {
    e.classList.toggle(`${styles.flipped}`);
  }
  
  return (
    <div className={styles.cardContainer}>
      <div className={styles.flipCard} onClick={(e) => flipCard(e.currentTarget)}>
    <div className={styles.cardFront}> </div>
    <div className={styles.cardBack}>
      <img src={elephant} alt='' />
    </div>
  </div>
    </div>
  )
}

export default Card;
