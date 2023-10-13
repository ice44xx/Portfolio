import Link from 'next/link';
import styles from '../../components/about/styles.module.scss';

const Download = () => {
  return (
    <div className={styles.link}>
      <div className={styles.container_img}>
        <img src='/download.webp' alt='download CV' />
      </div>
      <div className={styles.text}>
        <Link className={styles.href} href={'https://drive.google.com/u/0/uc?id=1XznO69biIIXDGgW6cvA3S3fpbACGOmQ_&export=download'}>
          <p>Download agora</p>
        </Link>
      </div>
    </div>
  );
};
export default Download;
