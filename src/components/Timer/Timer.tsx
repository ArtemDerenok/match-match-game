import { useEffect } from 'react';
import styles from './Timer.module.scss';

interface ITimerProp {
  time: number,
  setTime: (num: number) => void;
}

function Timer({time, setTime}: ITimerProp) {
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000)
      }
    }, 1000)
    return () => clearInterval(timerId);
  }, [time])
  
  const converTime = () => {
    let timeStr = '';
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor(((time - (minutes * 60000))/ 1000) % 60)
    timeStr = `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    return timeStr;
  }
  
  return (
    <div className={`${styles.container} m-auto`}>
      <span>{converTime()}</span>
    </div>
  )
}

export default Timer;
