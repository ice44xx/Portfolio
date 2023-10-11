import Link from 'next/link';
import styles from '../../components/about/styles.module.scss';

const Download = () => {
  return (
    <div className={styles.link}>
      <div className={styles.container_img}>
        <img src='/download.png' alt='download CV' />
      </div>
      <div className={styles.text}>
        <Link className={styles.href} href={'https://drive.google.com/u/0/uc?id=1aKxFZySIz9NLkdTtLRnsgDV0yfU7bFZy&export=download'}>
          <p>Download agora</p>
        </Link>
      </div>
    </div>
  );
};
export default Download;
