import styles from '../../../styles/style.module.scss';
import Navbar from '../navbar';
import { ParticlesComponent } from './particles';

const Home = () => {
  return (
    <main>
      <Navbar />
      <ParticlesComponent />
      <div className={styles.container}>
        <p className={styles.title}>
          <span>NSH</span>CODE
        </p>
        <p className={styles.subtitle}>Programando o Futuro, um Bit de Cada Vez.</p>
      </div>
    </main>
  );
};
export default Home;
