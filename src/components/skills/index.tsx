import styles from './styles.module.scss';
import IconCloud from './globe';

const skills = [
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'HTML5'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    alt: 'SASS'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
    alt: 'BULMA'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JAVASCRIPT'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
    alt: 'PHP'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    alt: 'LARAVEL'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'REACT'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TYPESCRIPT'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    alt: 'NODEJS'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    alt: 'NGINX'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    alt: 'NEXTJS'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'DOCKER'
  }
];
const databases = [
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
    alt: 'POSTGRESQL'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    alt: 'MYSQL'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
    alt: 'SQLSERVER'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
    alt: 'NESTJS'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    alt: 'MONGODB'
  }
];
const softwares = [
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
    alt: 'WINDOWS'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    alt: 'LINUX'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
    alt: 'FIREBASE'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    alt: 'FIGMA'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg',
    alt: 'PHOTOSHOP'
  }
];
const versions = [
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    alt: 'GITHUB'
  },

  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'GIT'
  }
];

const Skills = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <IconCloud />
        </div>
        <div className={styles.container_right}>
          <div className={styles.container_content}>
            <p className={styles.title}>Conhecimentos</p>
            {skills.map((icon, index) => (
              <div className={styles.container_icon}>
                <img key={index} src={icon.url} alt={icon.alt} className={styles.icon} />
              </div>
            ))}
          </div>

          <div className={styles.container_content}>
            <p className={styles.title}>Bancos de Dados</p>
            {databases.map((icon, index) => (
              <div className={styles.container_icon}>
                <img key={index} src={icon.url} alt={icon.alt} className={styles.icon} />
              </div>
            ))}
          </div>

          <div className={styles.container_content}>
            <p className={styles.title}>Softwares</p>
            {softwares.map((icon, index) => (
              <div className={styles.container_icon}>
                <img key={index} src={icon.url} alt={icon.alt} className={styles.icon} />
              </div>
            ))}
          </div>
          <div className={styles.container_content}>
            <p className={styles.title}>Controle de Versões</p>
            {versions.map((icon, index) => (
              <div className={styles.container_icon}>
                <img key={index} src={icon.url} alt={icon.alt} className={styles.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Skills;
