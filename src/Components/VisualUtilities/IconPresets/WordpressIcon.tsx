import React from 'react';
import { GrWordpress } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const WordpressIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrWordpress size={size} color={color} />
  );
}

export default WordpressIcon;
