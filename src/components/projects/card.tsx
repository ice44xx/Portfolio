import styles from './styles.module.scss';
import { useState } from 'react';
import ReactPlayer from 'react-player';

interface Props {
  toggle: () => void;
  open: boolean;
  info?: {
    title: string;
    desc: string;
    url: string;
    tools: Tools[];
    date: string;
    rede: string;
  };
}
interface Tools {
  name: string;
  image: string;
}
const Card: React.FC<Props> = ({ toggle, open, info }) => {
  const [isDemo, setIsDemo] = useState(true);
  const openVideo = () => {
    setIsDemo(!isDemo);
  };
  return (
    <div className={styles.container_blur}>
      <div className={`${styles.container_card} ${open ? styles.container_card : styles.container_card_hidden}`}>
        <img src='/fechar.webp' alt='fechar' className={styles.close} onClick={toggle} />
        <div className={styles.container_content_card}>
          <div className={styles.info}>
            <p className={styles.title}>{info?.title}</p>
            <p className={styles.desc}>{info?.desc}</p>
          </div>
          <div className={styles.demo} onClick={openVideo}>
            <p>Preview DEMO</p>
          </div>
          <div className={`${styles.video_blur} ${isDemo ? styles.video_blur_off : ''} `}>
            <div className={styles.container_video}>
              <img src='/fechar.webp' alt='fechar' className={styles.close} onClick={openVideo} />
              <ReactPlayer className={styles.video} url={info?.url} muted loop={true} playing={true} />
            </div>
          </div>
          <div className={styles.container_content_parts}>
            <div className={styles.container_video}>
              <ReactPlayer className={styles.video} url={info?.url} muted loop={true} playing={true} />
            </div>
            <div className={styles.tools}>
              <p className={styles.desc}>Esse projeto foi desenvolvido com as seguintes ferramentas:</p>
              <div className={styles.container_content_tools}>
                {info?.tools.map(tool => (
                  <div className={styles.container_tools}>
                    <img src={tool.image} alt={tool.name} className={styles.icons} />
                    <p>{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <p className={styles.date}>{info?.date}</p>
            <a href={info?.rede} target='_blank'>
              <img src='/redes/github.webp' alt='github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
