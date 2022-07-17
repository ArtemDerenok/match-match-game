import styles from './ScoreItem.module.scss';

interface ScoreItemProps {
  firstName: string,
  lastName: string,
  email: string,
  score: number,
}

function ScoreItem({firstName, lastName, email, score}: ScoreItemProps) {
  return (
    <div className='d-flex align-item justify-content-between align-items-center'>
      <div>
        <h6>{`${firstName} ${lastName}`}</h6>
        <p>{email}</p> 
      </div>
      <p>Score: <span className={styles.score}>{score}</span></p>
    </div>
  )
}

export default ScoreItem;
