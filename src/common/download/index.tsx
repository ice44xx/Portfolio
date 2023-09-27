import styles from '../../components/about/styles.module.scss';

const Download = () => {
  return (
    <div className={styles.link}>
      <div className={styles.container_img}>
        <img src='/download.png' alt='download CV' />
      </div>
      <div className={styles.text}>
        <p>Download agora</p>
      </div>
    </div>
  );
};
export default Download;
