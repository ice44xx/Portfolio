import { useState } from 'react';
import styles from './styles.module.scss';
import Carousel from '@/common/carousel';
import Card from './card';

type Keys = 'Pc' | 'Tablet' | 'Celular';
const data = [
  {
    name: 'Neko Animes',
    images: {
      Pc: '/projects/animes/pc.webp',
      Tablet: '/projects/animes/tablet.webp',
      Celular: '/projects/animes/celular.webp'
    },
    info: {
      title: 'Neko Animes',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949757/videos/neko.mp4',
      desc: 'Este projeto é o meu carro-chefe, um site dedicado a animes que oferece uma experiência completa para entusiastas do gênero.',
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
          image: 'https://dinhanhthi.com/img/header/nextjs.png'
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
      date: 'Agosto de 2023',
      rede: 'https://github.com/ice44xx/NuryVidros'
    }
  },
  {
    name: 'Nury Vidros',
    images: {
      Pc: '/projects/nury/pc.webp',
      Tablet: '/projects/nury/tablet.webp',
      Celular: '/projects/nury/celular.webp'
    },
    info: {
      title: 'Nury Vidros',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949062/videos/nury.mp4',
      desc: 'O site da vidraçaria obteve destaque na captação de leads, demonstrando eficácia em atrair e converter visitantes interessados em potenciais clientes.',
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
      date: 'Junho de 2022',
      rede: 'https://github.com/ice44xx/NuryVidros'
    }
  },
  {
    name: 'Renova Instalações',
    images: {
      Pc: '/projects/renova/pc.webp',
      Tablet: '/projects/renova/tablet.webp',
      Celular: '/projects/renova/celular.webp'
    },
    info: {
      title: 'Renova Instalações',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949665/videos/renova.mp4',
      desc: 'Neste projeto, foi utilizado diversas ferramentas de desenvolvimento web, se destacou muito na sua captação eficaz de leads.',
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
      date: 'Janeiro de 2023',
      rede: 'https://github.com/ice44xx/Renova-instacoes'
    }
  },
  {
    name: 'Studio Emily Dias',
    images: {
      Pc: '/projects/studio/pc.webp',
      Tablet: '/projects/studio/tablet.webp',
      Celular: '/projects/studio/celular.webp'
    },
    info: {
      title: 'Studio Emily Dias',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1697228777/videos/studio.mp4',
      desc: 'Este projeto se concentra no design de sobrancelhas, visando fornecer uma experiência online envolvente e informativa para os visitantes.',
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
          image: 'https://dinhanhthi.com/img/header/nextjs.png'
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
      date: 'Setembro de 2022',
      rede: 'https://github.com/ice44xx/Studio-Dias'
    }
  },
  {
    name: 'Poke Center',
    images: {
      Pc: '/projects/poke/pc.webp',
      Tablet: '/projects/poke/tablet.webp',
      Celular: '/projects/poke/celular.webp'
    },
    info: {
      title: 'Poke Center',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949294/videos/poke.mp4',
      desc: 'Este projeto resultou em um site dedicado a fornecer informações sobre Pokémon. Foi desenvolvido utilizando várias tecnologias para criar uma experiência online envolvente e informativa.',
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
          image: 'https://dinhanhthi.com/img/header/nextjs.png'
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
      date: 'Setembro de 2023',
      rede: 'https://github.com/ice44xx/Studio-Emily-Dias'
    }
  },
  {
    name: 'Space X',
    images: {
      Pc: '/projects/space/pc.webp',
      Tablet: '/projects/space/tablet.webp',
      Celular: '/projects/space/celular.webp'
    },
    info: {
      title: 'Space X',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949093/videos/spacex.mp4',
      desc: 'Este projeto é uma réplica do site da SpaceX, criado com o objetivo de aprimorar as habilidades de design e desenvolvimento web.',
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
      date: 'Fevereiro de 2022',
      rede: 'https://github.com/ice44xx/Projeto-SpaceX'
    }
  },
  {
    name: 'Amplify Metas',
    images: {
      Pc: '/projects/amplify/pc.webp',
      Tablet: '/projects/amplify/tablet.webp',
      Celular: '/projects/amplify/celular.webp'
    },
    info: {
      title: 'Amplify Metas',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949295/videos/amplify.mp4',
      desc: 'Este projeto, que utilizou uma variedade de ferramentas de desenvolvimento web, dominou o mercado por anos como um site de marketing digital dedicado a ajudar os clientes a realizar seus sonhos.',
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
        }
      ],
      date: 'Dezembro de 2022',
      rede: 'https://github.com/ice44xx/Projeto-SpaceX'
    }
  },
  {
    name: 'Banda PopTop',
    images: {
      Pc: '/projects/banda/pc.webp',
      Tablet: '/projects/banda/tablet.webp',
      Celular: '/projects/banda/celular.webp'
    },
    info: {
      title: 'Banda PopTop',
      url: 'https://res.cloudinary.com/dwaima1ht/video/upload/v1696949138/videos/banda.mp4',
      desc: 'Este projeto culminou na criação de um site para uma banda em ascensão, e após a implementação, a banda experimentou um notável reconhecimento.',
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
        }
      ],
      date: 'Outubro de 2022',
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
