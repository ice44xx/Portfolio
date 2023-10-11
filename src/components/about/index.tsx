import Download from '@/common/download';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

const About = () => {
  const [bgClass, setBgClass] = useState(styles.container_hero);
  const divClasses = [styles.purple, styles.green, styles.pink, styles.blue];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * divClasses.length);
      const newBgClass = divClasses[randomIndex];
      setBgClass(`${styles.container_hero} ${newBgClass}`);
    }, 4000);

    // Limpe o temporizador quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <div className={`${styles.container_hero} ${bgClass}`}>
            <div className={styles.purple}></div>
            <div className={styles.green}></div>
            <div className={styles.pink}></div>
            <div className={styles.blue}></div>
            <img src='/hero.png' alt='NSHCODE' className={styles.hero} />
          </div>
          <div className={styles.about}>
            <p className={styles.title}>
              DESENVOLVEDOR <span>FULL STACK</span>
            </p>
            <p className={styles.desc}>Com experiência em diversos projetos</p>
            <p className={styles.desc_one}>
              Especializado em <span>JavaScript</span>, <span>Php</span>, <span>NodeJs</span>.
            </p>
            <p className={styles.desc_two}>Minha carreira inclui a criação de plataformas de streaming, cursos online e diversas landing pages.</p>
            <p className={styles.desc_third}>
              Além disso, tenho ampla experiência na criação e manutenção de backends personalizados, implementando <span>UX</span> personalizadas.
            </p>
            <div className={styles.bar}></div>
          </div>
        </div>
        <div className={styles.download}>
          <p className={styles.title}>
            Meu <span>CV</span> para download
          </p>
          <Download />
        </div>
      </div>
    </main>
  );
};
export default About;
