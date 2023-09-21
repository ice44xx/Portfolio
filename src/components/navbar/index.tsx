import Link from 'next/link';
import styles from './style.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link href={'/'} className={styles.link}>
          <li>Home</li>
        </Link>
        <Link href={'/sobre'} className={styles.link}>
          <li>About</li>
        </Link>
        <Link href={'/habilidades'} className={styles.link}>
          <li>Skills</li>
        </Link>
        <Link href={'/projetos'} className={styles.link}>
          <li>Projects</li>
        </Link>
        <Link href={'/redes'} className={styles.link}>
          <li>Redes</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
