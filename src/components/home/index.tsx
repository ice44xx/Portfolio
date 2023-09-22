import styles from '../../../styles/style.module.scss';
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
  console.log(activeSection);

  return (
    <main>
      <Navbar changePage={handlePageChange} />
      <Transition show={showTransition} />
      <ParticlesComponent />
      {activeSection === 'home' && (
        <div className={styles.container}>
          <p className={styles.title}>
            <span>NSH</span>CODE
          </p>
          <p className={styles.subtitle}>
            <Typing text='Programando o Futuro, um Bit de Cada Vez.' />
          </p>
          <div className={styles.container_whatsapp}>
            <p className={styles.header}>Vamos conversar ?</p>
            <img src='/whatsapp.png' alt='logo whatsapp' className={`${styles.img} fas fa-basketball fa-bounce`}></img>
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
      {activeSection === 'projects' && (
        <div className={styles.container}>
          <Projects />
        </div>
      )}
      {activeSection === 'contact' && (
        <div className={styles.container}>
          <Contact />
        </div>
      )}
    </main>
  );
};
export default Home;
