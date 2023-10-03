import Card from '@/components/projects/card';
import styles from '../../components/projects/styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState } from 'react';

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
  getImgForSelectItem: () => string;
  onProjectSelect: (index: number) => void;
  isImageVisible: boolean;
}
interface Tools {
  name: string;
  image: string;
}

type Keys = 'Pc' | 'Tablet' | 'Celular';

const Carousel: React.FC<Props> = ({ projects, handleClick, getImgForSelectItem, isImageVisible, handleVisible, onProjectSelect }) => {
  return (
    <>
      <Splide className={styles.splide}>
        {projects.map((project, index) => (
          <SplideSlide className={styles.splide_slide} onClick={() => onProjectSelect(index)}>
            <div className={styles.container_projects_box}>
              <div className={styles.title}>
                <p>{project.name}</p>
                <div className={styles.info} onClick={handleVisible}>
                  <img src='/more.png' alt='informações' />
                  <p>Info</p>
                </div>
              </div>
              <div className={styles.container_content_project_items}>
                <div className={styles.projects}>
                  <div className={`${styles.container_logo} ${isImageVisible ? styles.visible : ''}`}>
                    <img src={getImgForSelectItem()} alt={project.name} className={styles.logo} />
                    <img src='/circulo.png' alt='circulo' className={styles.circle} />
                  </div>
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
