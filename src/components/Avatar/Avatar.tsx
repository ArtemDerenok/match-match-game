import styles from './Avatar.module.scss';
import avatar from '../../assets/avatar.png';

interface IAvatarProps {
  src: string | null,
  firstName: string,
}

function Avatar({src, firstName}: IAvatarProps) {
  return (
    <img src={src || avatar} alt={`${firstName}'s avatar`} className={styles.avatar} />
  )
}

export default Avatar;
