import { useState } from 'react';
import styles from './styles.module.scss';
import Carousel from '@/common/carousel';

type Keys = 'Pc' | 'Tablet' | 'Celular';
const data = [
  {
    name: 'Nury Vidros',
    images: {
      Pc: '/projects/nury/pc.png',
      Tablet: '/projects/nury/tablet.png',
      Celular: '/projects/nury/celular.png'
    }
  },
  {
    name: 'Studio Emily Dias',
    images: {
      Pc: '/projects/nury/pc.png',
      Tablet: '/projects/nury/tablet.png',
      Celular: '/projects/nury/celular.png'
    }
  }
];

const Projects = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Keys>('Pc');
  const projects = data[currentProject];

  const handleClick = (item: Keys) => {
    if (item !== selectedItem) {
      setIsImageVisible(false);
      setTimeout(() => {
        setSelectedItem(item);
        setIsImageVisible(true);
      }, 500);
    }
  };

  const getImgForSelectItem = () => {
    return projects.images[selectedItem];
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.conainer_projects}>
          <Carousel getImgForSelectItem={getImgForSelectItem} handleClick={handleClick} projects={data} isImageVisible={isImageVisible} />
        </div>
      </div>
    </main>
  );
};
export default Projects;
