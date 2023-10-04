import React from 'react';
import { Cloud, ICloud, renderSimpleIcon } from 'react-icon-cloud';
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

const options: ICloud['options'] = {
  clickToFront: 500,
  imageScale: 1.2,
  initial: [0.1, -0.1],
  // interval: number
  // lock: null | 'x' | 'y' | 'xy'
  // maxBrightness: number
  // minBrightness: number
  // minSpeed: number
  // minTags: 0 - 200
  // noMouse: boolean
  // noSelect: boolean
  // noTagsMessage: string
  // offsetX: number
  // offsetY: number
  outlineColour: '#0000',
  // outlineDash: number
  // outlineDashSpace: number
  // outlineIncrease: number
  // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
  // outlineOffset: number
  // outlineRadius: number
  // outlineThickness: number
  // padding: number
  // pinchZoom: boolean
  // pulsateTime: number
  // pulstateTo: number
  // radiusX: number
  // radiusY: number
  // radiusZ: number
  // repeatTagsTags: 0 - 64
  reverse: true,
  // scrollPause: boolean
  // shadow: string
  // shadowBlur: number
  // shadowOffset: [number,number] | number[]
  // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
  // shuffleTags: boolean
  // splitWidth: number
  // stretchX: number
  // stretchY: number
  // textAlign: 'centre' | 'left' | 'right'
  // textColour: string
  // textFont: string
  // textHeight: number
  // textVAlign: 'top' | 'bottom' | 'middle'
  tooltip: 'native', // null | 'div'
  // tooltipClass: string
  tooltipDelay: 0,
  // txtOpt: boolean
  // txtScale: number
  // weight: boolean
  // weightFrom: any
  // weightGradient: any
  // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
  // weightSize: number
  // weightSizeMax: number | null
  // weightSizeMin: number | null
  wheelZoom: false
  // zoom: number
  // zoomMax: number
  // zoomMin: number
  // zoomStep: number
};
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
  return <Cloud options={options}>{icons}</Cloud>;
};

export default IconCloud;
