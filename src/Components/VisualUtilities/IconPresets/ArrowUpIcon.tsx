import React from 'react';
import { MdArrowUpward } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ArrowUpIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdArrowUpward size={size} color={color} />
  );
}

export default ArrowUpIcon;
