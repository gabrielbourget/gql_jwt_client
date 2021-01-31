import React from 'react';
// import { GrHome } from 'react-icons/gr';
import { AiFillHome } from 'react-icons/ai'

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const HomeIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiFillHome size={size} color={color} />
  );
}

export default HomeIcon;
