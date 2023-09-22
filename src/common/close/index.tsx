import styles from './styles.module.scss';
const CloseBtn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_line}>
        <p className={`${styles.line} ${styles.line1}`}></p>
        <p className={`${styles.line} ${styles.line2}`}></p>
        <p className={`${styles.line} ${styles.line3}`}></p>
      </div>
    </div>
  );
};
export default CloseBtn;
