import styles from './styles.module.scss';
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
  return (
    <div className={styles.container_blur}>
      <div className={`${styles.container_card} ${open ? styles.container_card : styles.container_card_hidden}`}>
        <img src='/fechar.png' alt='fechar' className={styles.close} onClick={toggle} />
        <div className={styles.container_content_card}>
          <p className={styles.title}>{info?.title}</p>
          <p className={styles.desc}>{info?.desc}</p>
          <div className={styles.container_content_parts}>
            <ReactPlayer url={info?.url} width={355} height={200} muted loop={false} playing={true} />
            <div className={styles.tools}>
              <p>Esse projeto foi desenvolvido com as seguintes ferramentas:</p>
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
              <img src='/redes/github.png' alt='github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
