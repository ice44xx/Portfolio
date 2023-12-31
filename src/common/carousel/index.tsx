import styles from '../../components/projects/styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface Props {
  projects: {
    name: string;
    images: {
      Pc: string;
      Tablet: string;
      Celular: string;
    };
    info?: {
      title: string;
      url: string;
      desc: string;
      tools: Tools[];
      date: string;
    };
  }[];
  handleVisible: (item: any) => void;
  handleClick: (item: any) => void;
  selectKey: string;
  onProjectSelect: (index: number) => void;
  isImageVisible: boolean;
}
interface Tools {
  name: string;
  image: string;
}

type Keys = 'Pc' | 'Tablet' | 'Celular';

const Carousel: React.FC<Props> = ({ projects, handleClick, selectKey, isImageVisible, handleVisible, onProjectSelect }) => {
  return (
    <>
      <Splide className={styles.splide}>
        {projects.map((project, index) => (
          <SplideSlide key={index} className={styles.splide_slide} onClick={() => onProjectSelect(index)}>
            <div className={styles.container_projects_box}>
              <div className={styles.title}>
                <p className={styles.name}>{project.name}</p>
                <div className={styles.info} onClick={handleVisible}>
                  <img src='/more.webp' alt='informações' />
                  <p>Info</p>
                </div>
              </div>
              <div className={styles.container_content_project_items}>
                <div className={styles.projects}>
                  <div className={`${styles.container_logo} ${isImageVisible ? styles.visible : ''}`}>
                    {selectKey === 'Pc' && <img src={project.images.Pc} alt={project.name} className={styles.logo} />}
                    {selectKey === 'Celular' && <img src={project.images.Celular} alt={project.name} className={styles.logo} />}
                    {selectKey === 'Tablet' && <img src={project.images.Tablet} alt={project.name} className={styles.logo} />}
                    <img src='/circulo.webp' alt='circulo background' className={styles.circle} />
                  </div>
                </div>
                <div className={styles.container_another_items}>
                  {Object.keys(project.images).map(item => (
                    <div className={styles.container_options}>
                      <img src='/arrowRight.webp' alt='flecha para direita' />
                      <p onClick={() => handleClick(item as Keys)} key={item} className={styles.item}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};
export default Carousel;
