import styles from './MenuItem.module.scss';

interface MenuItemProps {
  img: string,
  content: string,
}

function MenuItem({img, content}: MenuItemProps) {
  return (
    <div className={styles.container}>
      <img src={img} alt={content} className={styles.logo} />
      <span className={styles.text}>{content}</span>
    </div>
  )
}

export default MenuItem;
