import styles from './styles.module.scss';
import Masked from 'react-text-mask';

interface Props {
  toggle: () => void;
  open: boolean;
}
const Form: React.FC<Props> = ({ toggle, open }) => {
  return (
    <div className={`${styles.openSend} ${open ? styles.openSend : styles.openSendHidden}`}>
      <div className={styles.title}>
        <p>
          <span>NSH</span>CODE
        </p>
      </div>
      <img src='fechar.webp' alt='fechar' className={styles.close} onClick={toggle} />
      <form className={styles.form} action='https://formspree.io/f/meqbrble' method='POST'>
        <div className={styles.formgroup}>
          <input type='text' id='name' name='name' placeholder=' ' required className={styles.input} />
          <label htmlFor='name' className={styles.label}>
            Nome
          </label>
        </div>
        <div className={styles.formgroup}>
          <Masked
            type='tel'
            id='tel'
            name='tel'
            placeholder=' '
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            guide={false}
            required
            className={styles.input}
          />
          <label htmlFor='tel' className={styles.label}>
            Whatsapp
          </label>
        </div>
        <div className={styles.formgroupTextarea}>
          <textarea id='message' name='message' placeholder=' ' required cols={40} rows={10} className={styles.input} />
          <label htmlFor='message' className={styles.label}>
            Mensagem
          </label>
        </div>
        <button type='submit' className={styles.btn}>
          Enviar
          <img src='/enviar.webp' alt='nshcode enviar' className={styles.img} />
        </button>
      </form>
    </div>
  );
};
export default Form;
