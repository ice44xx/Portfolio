import { useState } from 'react';
import styles from './style.module.scss';

interface Props {
  changePage: (section: string) => void;
}

const Navbar: React.FC<Props> = ({ changePage }) => {
  const [activeSection, setActiveSection] = useState('home');
  const changeActiveSection = (section: string) => {
    setActiveSection(section);
    changePage(section);
  };

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <button className={styles.btn} onClick={() => changeActiveSection('home')}>
            Home
          </button>
        </li>
        <li>
          <button className={styles.btn} onClick={() => changeActiveSection('sobre')}>
            Sobre
          </button>
        </li>
        <li>
          <button className={styles.btn} onClick={() => changeActiveSection('habilidades')}>
            Habilidades
          </button>
        </li>
        <li>
          <button className={styles.btn} onClick={() => changeActiveSection('projetos')}>
            Projetos
          </button>
        </li>
        <li>
          <button className={styles.btn} onClick={() => changeActiveSection('contato')}>
            Redes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
