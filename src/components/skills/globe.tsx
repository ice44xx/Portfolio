import React from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import {
  siJavascript,
  siNextdotjs,
  siReact,
  siPhp,
  siLaravel,
  siCss3,
  siHtml5,
  siSass,
  siNginx,
  siBulma,
  siNodemon,
  siDocker,
  siGit,
  siGithub,
  siTypescript,
  siWindows,
  siLinux,
  siFigma,
  siAdobephotoshop,
  siPostgresql,
  siMysql,
  siMicrosoftsqlserver,
  siMongodb,
  siXampp
} from 'simple-icons/icons';

const icons = [
  siJavascript,
  siNextdotjs,
  siReact,
  siCss3,
  siHtml5,
  siSass,
  siNginx,
  siBulma,
  siNodemon,
  siDocker,
  siGit,
  siGithub,
  siTypescript,
  siPhp,
  siLaravel,
  siWindows,
  siLinux,
  siFigma,
  siAdobephotoshop,
  siPostgresql,
  siMysql,
  siMicrosoftsqlserver,
  siMongodb,
  siXampp
].map(icon => {
  return renderSimpleIcon({
    icon,
    size: 75,
    aProps: {
      onClick: (e: any) => e.preventDefault()
    }
  });
});

const IconCloud = () => {
  return <Cloud>{icons}</Cloud>;
};

export default IconCloud;
