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
  }[];
  handleClick: (item: any) => void;
  getImgForSelectItem: () => string;
  isImageVisible: boolean;
}

type Keys = 'Pc' | 'Tablet' | 'Celular';

const Carousel: React.FC<Props> = ({ projects, handleClick, getImgForSelectItem, isImageVisible }) => {
  return (
    <>
      <Splide className={styles.splide}>
        {projects.map(project => (
          <SplideSlide className={styles.splide_slide}>
            <div className={styles.container_projects_box}>
              <div className={styles.title}>
                <p>{project.name}</p>
              </div>
              <div className={styles.container_content_project_items}>
                <div className={styles.projects}>
                  <img src={getImgForSelectItem()} alt={project.name} className={`${styles.logo} ${isImageVisible ? styles.visible : ''}`} />
                </div>
                <div className={styles.container_another_items}>
                  {Object.keys(project.images).map(item => (
                    <div className={styles.container_options}>
                      <img src='/arrowRight.png' alt='flecha para direita' />
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
