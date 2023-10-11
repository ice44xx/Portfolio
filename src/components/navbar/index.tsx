import { useState } from 'react';
import styles from './style.module.scss';
import CloseBtn from '@/common/close';

interface Props {
  changePage: (section: string) => void;
}

const Navbar: React.FC<Props> = ({ changePage }) => {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const changeActiveSection = (section: string) => {
    setActiveSection(section);
    changePage(section);
    setActive(false);
  };

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <CloseBtn click={handleToggle} active={active} />
      <div className={`${styles.navbar} ${active ? styles.navbar : styles.navbarHidden}`}>
        <ul>
          <li>
            <button className={`${styles.btn} ${styles.btn1}`} onClick={() => changeActiveSection('home')}>
              Home
            </button>
          </li>
          <li>
            <button className={`${styles.btn} ${styles.btn2}`} onClick={() => changeActiveSection('sobre')}>
              Sobre
            </button>
          </li>
          <li>
            <button className={`${styles.btn} ${styles.btn3}`} onClick={() => changeActiveSection('habilidades')}>
              Habilidades
            </button>
          </li>
          <li>
            <button className={`${styles.btn} ${styles.btn4}`} onClick={() => changeActiveSection('projetos')}>
              Projetos
            </button>
          </li>
          <li>
            <button className={`${styles.btn} ${styles.btn5}`} onClick={() => changeActiveSection('contato')}>
              Redes
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
