import { useState } from 'react';
import Form from './form';
import styles from './styles.module.scss';
import Link from 'next/link';

const icons = [
  {
    url: '/redes/whats.png',
    alt: 'Whatsapp',
    link: 'https://api.whatsapp.com/send?phone=555193347391'
  },
  {
    url: '/redes/instagram.png',
    alt: 'Instagram',
    link: 'https://www.instagram.com/nathans4x/'
  },
  {
    url: '/redes/linkedin.png',
    alt: 'Linkedin',
    link: 'https://www.linkedin.com/in/nathan-sant-helena-bb0623285'
  },
  {
    url: '/redes/github.png',
    alt: 'GitHub',
    link: 'https://github.com/ice44xx'
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
          <div className={styles.header} onClick={handleClick}>
            <p>Contate por e-mail</p>
            <img src='/enviar.png' alt='envie um email' className={styles.send} />
          </div>
        </div>
        <div className={styles.redes}>
          <div className={styles.header}>
            <p>Redes</p>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.container_redes}>
            {icons.map((icon, index) => (
              <div key={index} className={styles.container_icon}>
                <Link href={icon.link} target='_blank'>
                  <img src={icon.url} alt={icon.alt} className={styles.icon} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Form open={open} toggle={handleClick} />
    </main>
  );
};
export default Contact;
