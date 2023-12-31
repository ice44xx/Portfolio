import styles from './styles.module.scss';

interface Props {
  show: boolean;
}
const Transition: React.FC<Props> = ({ show }) => {
  return (
    <div className={`${styles.transition} ${show ? styles['slide-in'] : styles['slide-out']}`}>
      <p>
        <span>NSH</span>CODE
      </p>
    </div>
  );
};
export default Transition;
