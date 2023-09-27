import { useState } from 'react';
import styles from './styles.module.scss';
interface Props {
  click: () => void;
}
const CloseBtn: React.FC<Props> = ({ click }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAnimation = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.container} onClick={click}>
      <div className={`${styles.container_line} ${isActive ? styles.active : ''}`} onClick={toggleAnimation}>
        <p className={`${styles.line} ${styles.line1}`}></p>
        <p className={`${styles.line} ${styles.line2}`}></p>
        <p className={`${styles.line} ${styles.line3}`}></p>
      </div>
    </div>
  );
};
export default CloseBtn;
