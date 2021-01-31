import React from 'react';
import { MdArrowForward } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ArrowRightIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdArrowForward size={size} color={color} />
  );
}

export default ArrowRightIcon;
