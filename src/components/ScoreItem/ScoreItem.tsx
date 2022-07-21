import Avatar from '../Avatar/Avatar';
import styles from './ScoreItem.module.scss';

interface ScoreItemProps {
  firstName: string,
  lastName: string,
  email: string,
  score: number,
  avatarBase64: string | null,
}

function ScoreItem({firstName, lastName, email, score, avatarBase64}: ScoreItemProps) {
  return (
    <div className='d-flex align-item justify-content-between align-items-center'>
      <div className='d-flex gap-2 align-items-center'>
        <Avatar src={avatarBase64} firstName={firstName} />
        <div>
          <h6>{`${firstName} ${lastName}`}</h6>
          <p className={styles.email}>{email}</p> 
        </div>
      </div>
      <p>Score: <span className={styles.score}>{score}</span></p>
    </div>
  )
}

export default ScoreItem;
