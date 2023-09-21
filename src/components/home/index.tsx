import styles from '../../../styles/style.module.scss';
import { ParticlesComponent } from './particles';

const Home = () => {
  return (
    <main>
      <ParticlesComponent />
      <div className={styles.container_header}>
        <p className={styles.title}>NSHCODE</p>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quisquam.</p>
      </div>
    </main>
  );
};
export default Home;
