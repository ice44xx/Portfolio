import styles from './styles.module.scss';
import Navbar from '../navbar';
import { useState } from 'react';
import { ParticlesComponent } from './particles';
import Transition from '@/common/transition';
import About from '../about';
import Skills from '../skills';
import Projects from '../projects';
import Contact from '../contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Typing from '@/common/typed';
import Link from 'next/link';

const Home = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handlePageChange = (section: string) => {
    setShowTransition(true);
    setTimeout(() => {
      setActiveSection(section);
      setShowTransition(false);
    }, 1000);
  };

  return (
    <main>
      <div className={styles.background}>
        <img src='/back_left.webp' alt='Faixa decorativa' className={styles.background_left} />
        <img src='/back_right.webp' alt='Faixa decorativa' className={styles.background_right} />
      </div>
      <Navbar changePage={handlePageChange} />
      <Transition show={showTransition} />
      {activeSection === 'home' && (
        <div className={styles.container}>
          <div className={styles.particles}>
            <ParticlesComponent />
          </div>
          <p className={styles.title}>
            <span>NSH</span>CODE
          </p>
          <p className={styles.subtitle}>
            <Typing text='Programando o Futuro, um Bit de Cada Vez.' />
          </p>
          <div className={styles.container_whatsapp}>
            <Link href={'https://api.whatsapp.com/send?phone=555193347391'} target='_blank' className={styles.link}>
              <p className={styles.header}>Vamos conversar ?</p>{' '}
              <img src='/whatsapp.webp' alt='logo whatsapp' className={`${styles.img} fas fa-basketball fa-bounce`}></img>
            </Link>
          </div>
        </div>
      )}
      {activeSection === 'sobre' && (
        <div className={styles.container}>
          <About />
        </div>
      )}
      {activeSection === 'habilidades' && (
        <div className={styles.container}>
          <Skills />
        </div>
      )}
      {activeSection === 'projetos' && (
        <div className={styles.container}>
          <Projects />
        </div>
      )}
      {activeSection === 'contato' && (
        <div className={styles.container}>
          <Contact />
        </div>
      )}
    </main>
  );
};
export default Home;
