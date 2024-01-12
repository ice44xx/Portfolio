import React, { useMemo } from 'react';
import { Cloud, ICloud, renderSimpleIcon, SimpleIcon } from 'react-icon-cloud';
import * as Icons from 'simple-icons/icons';

const options: ICloud['options'] = {
  clickToFront: 500,
  imageScale: 1.2,
  initial: [0.1, -0.01],
  noMouse: true,
  outlineColour: '#0000',
  reverse: true,
  tooltip: 'native',
  tooltipDelay: 0,
  wheelZoom: false
};

const iconsList: SimpleIcon[] = [
  Icons.siJavascript,
  Icons.siNextdotjs,
  Icons.siReact,
  Icons.siCss3,
  Icons.siHtml5,
  Icons.siSass,
  Icons.siNginx,
  Icons.siBulma,
  Icons.siNodemon,
  Icons.siDocker,
  Icons.siGit,
  Icons.siGithub,
  Icons.siTypescript,
  Icons.siPhp,
  Icons.siLaravel,
  Icons.siWindows,
  Icons.siLinux,
  Icons.siFigma,
  Icons.siAdobephotoshop,
  Icons.siPostgresql,
  Icons.siMysql,
  Icons.siMicrosoftsqlserver,
  Icons.siMongodb,
  Icons.siXampp
];

const IconCloud = () => {
  const memoizedIcons = useMemo(() => {
    return iconsList.map(icon => {
      return renderSimpleIcon({
        icon,
        size: 75
      });
    });
  }, [iconsList]);

  return <Cloud options={options}>{memoizedIcons}</Cloud>;
};

export default IconCloud;
