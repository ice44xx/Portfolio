import { useState } from 'react';
import styles from './styles.module.scss';
import Carousel from '@/common/carousel';
import Card from './card';

type Keys = 'Pc' | 'Tablet' | 'Celular';
const data = [
  {
    name: 'Nury Vidros',
    images: {
      Pc: '/projects/nury/pc.png',
      Tablet: '/projects/nury/tablet.png',
      Celular: '/projects/nury/celular.png'
    },
    info: {
      title: 'Nury Vidros',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, temporibus!',
      tools: [
        {
          name: 'HTML5',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
          name: 'CSS3',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
          name: 'Sass',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        },
        {
          name: 'Javascript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
          name: 'ReactJS',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        }
      ],
      date: '03 de Dezembro de 2022'
    }
  },
  {
    name: 'Studio Emily Dias',
    images: {
      Pc: '/projects/nury/pc.png',
      Tablet: '/projects/nury/tablet.png',
      Celular: '/projects/nury/celular.png'
    },
    info: {
      title: 'Studio Emily Dias',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
      tools: ['outras ferramentas'],
      date: '04 de Dezembro de 2022'
    }
  }
];

const Projects = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);
  const [selectProject, setSelectProject] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Keys>('Pc');
  const projects = data[selectProject];
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };

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

  const handleProjectSelect = (index: number) => {
    setSelectProject(index);
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.conainer_projects}>
          <Carousel
            handleVisible={handleVisible}
            getImgForSelectItem={getImgForSelectItem}
            handleClick={handleClick}
            projects={data}
            isImageVisible={isImageVisible}
            onProjectSelect={handleProjectSelect}
          />
        </div>
      </div>
      {visible ? <Card info={projects.info} open={visible} toggle={handleVisible} /> : ''}
    </main>
  );
};
export default Projects;
