import { useRef, useEffect } from 'react';
import avatar from '../../assets/avatar.png';
import styles from './ScoreItem.module.scss';

interface ScoreItemProps {
  firstName: string,
  lastName: string,
  email: string,
  score: number,
  avatarBase64: string | null,
}

function ScoreItem({firstName, lastName, email, score, avatarBase64}: ScoreItemProps) {
  
  const imgRef = useRef<HTMLImageElement>(null);
  
  const base64toImage = (base64: string | null) => {
    if (imgRef.current) {
      if (base64) {
        imgRef.current.src = base64;
      } else {
        imgRef.current.src = avatar;
      }
    }
  }
  
  useEffect(() => {
    base64toImage(avatarBase64);
  }, [])
  
  return (
    <div className='d-flex align-item justify-content-between align-items-center'>
      <div className='d-flex gap-2 align-items-center'>
        <img ref={imgRef} src='' alt={`${firstName}'s avatar`} className={styles.avatar} />
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
