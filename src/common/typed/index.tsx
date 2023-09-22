import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface Props {
  text: string;
}
const Typing: React.FC<Props> = ({ text }) => {
  return <TypeAnimation sequence={[500, text]} speed={20} cursor={false} />;
};

export default Typing;
