import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Carousel from '@/common/carousel';
import Card from './card';

type Keys = 'Pc' | 'Tablet' | 'Celular';
const data = [
  {
    name: 'Neko Animes',
    images: {
      Pc: '/projects/animes/pc.png',
      Tablet: '/projects/animes/tablet.png',
      Celular: '/projects/animes/celular.png'
    },
    info: {
      title: 'Neko Animes',
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
          name: 'ReactJs',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Typescript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
          name: 'NextJs',
          image: 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png'
        },
        {
          name: 'Postgresql',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
          name: 'Nginx',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
        },
        {
          name: 'Firebase',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
        },
        {
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Filezilla',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg'
        }
      ],
      date: '17 de Agosto de 2023',
      rede: 'https://github.com/ice44xx/NuryVidros'
    }
  },
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
          name: 'ReactJs',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Filezilla',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg'
        }
      ],
      date: '17 de Agosto de 2023',
      rede: 'https://github.com/ice44xx/NuryVidros'
    }
  },
  {
    name: 'Renova Instalações',
    images: {
      Pc: '/projects/renova/pc.png',
      Tablet: '/projects/renova/tablet.png',
      Celular: '/projects/renova/celular.png'
    },
    info: {
      title: 'Renova Instalações',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
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
          name: 'Webpack',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
        },
        {
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Filezilla',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg'
        }
      ],
      date: '10 de Março de 2023',
      rede: 'https://github.com/ice44xx/Renova-instacoes'
    }
  },
  {
    name: 'Studio Emily Dias',
    images: {
      Pc: '/projects/studio/pc.png',
      Tablet: '/projects/studio/tablet.png',
      Celular: '/projects/studio/celular.png'
    },
    info: {
      title: 'Studio Emily Dias',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
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
          name: 'Webpack',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
        },
        {
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Filezilla',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg'
        }
      ],
      date: '11 de Agosto de 2023',
      rede: 'https://github.com/ice44xx/Studio-Emily-Dias'
    }
  },
  {
    name: 'Poke Center',
    images: {
      Pc: '/projects/poke/pc.png',
      Tablet: '/projects/poke/tablet.png',
      Celular: '/projects/poke/celular.png'
    },
    info: {
      title: 'Poke Center',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
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
          name: 'ReactJs',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Typescript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
          name: 'Javascript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
          name: 'NextJs',
          image: 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png'
        },
        {
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Filezilla',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg'
        }
      ],
      date: '16 de Agosto de 2023',
      rede: 'https://github.com/ice44xx/Studio-Emily-Dias'
    }
  },
  {
    name: 'Space X',
    images: {
      Pc: '/projects/space/pc.png',
      Tablet: '/projects/space/tablet.png',
      Celular: '/projects/space/celular.png'
    },
    info: {
      title: 'Space X',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
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
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        }
      ],
      date: '10 de Dezembro de 2022',
      rede: 'https://github.com/ice44xx/Projeto-SpaceX'
    }
  },
  {
    name: 'Amplify Metas',
    images: {
      Pc: '/projects/amplify/pc.png',
      Tablet: '/projects/amplify/tablet.png',
      Celular: '/projects/amplify/celular.png'
    },
    info: {
      title: 'Amplify Metas',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
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
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        }
      ],
      date: '10 de Dezembro de 2022',
      rede: 'https://github.com/ice44xx/Projeto-SpaceX'
    }
  },
  {
    name: 'Banda PopTop',
    images: {
      Pc: '/projects/banda/pc.png',
      Tablet: '/projects/banda/tablet.png',
      Celular: '/projects/banda/celular.png'
    },
    info: {
      title: 'Banda PopTop',
      url: 'https://www.youtube.com/watch?v=RZQlr21fiAU',
      desc: 'outras informações',
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
          name: 'Figma',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        }
      ],
      date: '10 de Dezembro de 2022',
      rede: 'https://github.com/ice44xx/Projeto-SpaceX'
    }
  }
];

const Projects = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
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
            handleClick={handleClick}
            projects={data}
            selectKey={selectedItem}
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
