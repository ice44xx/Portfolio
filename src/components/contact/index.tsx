import styles from './styles.module.scss';
import { useState } from 'react';

const icons = [
  {
    url: '/whats.png',
    alt: 'Whatsapp'
  },
  {
    url: '/instagram.png',
    alt: 'Instagram'
  },
  {
    url: '/linkedin.png',
    alt: 'Linkedin'
  },
  {
    url: '/github.png',
    alt: 'GitHub'
  }
];
const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.container_send}>
          <div className={styles.header}>
            <p onClick={handleClick}>Me envie um email</p>
            <img src='/enviar.png' alt='envie um email' className={styles.send} />
          </div>
        </div>
        <div className={styles.redes}>
          <div className={styles.header}>
            <p>Redes</p>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.container_redes}>
            {icons.map(icon => (
              <div className={styles.container_icon}>
                <img src={icon.url} alt={icon.alt} className={styles.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.openSend} ${open ? styles.openSend : styles.openSendHidden}`}>
        <div className={styles.title}>
          <p>
            <span>NSH</span>CODE
          </p>
        </div>
        <img src='fechar.png' alt='fechar' className={styles.close} onClick={handleClick} />
        <form className={styles.form}>
          <div className={styles.formgroup}>
            <input type='text' id='name' name='name' placeholder=' ' required className={styles.input} />
            <label htmlFor='name' className={styles.label}>
              Nome
            </label>
          </div>
          <div className={styles.formgroup}>
            <input type='tel' id='tel' name='tel' placeholder=' ' required className={styles.input} />
            <label htmlFor='tel' className={styles.label}>
              Whatsapp
            </label>
          </div>
          <div className={styles.formgroupTextarea}>
            <textarea id='msg' name='msg' placeholder=' ' required cols={40} rows={10} className={styles.input} />
            <label htmlFor='msg' className={styles.label}>
              Mensagem
            </label>
          </div>
          <button type='submit' className={styles.btn}>
            Enviar
            <img src='/enviar.png' alt='nshcode enviar' className={styles.img} />
          </button>
        </form>
      </div>
    </main>
  );
};
export default Contact;
