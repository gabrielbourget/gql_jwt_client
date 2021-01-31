import React from 'react';
import { MdArrowBack } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ArrowLeftIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdArrowBack size={size} color={color} />
  );
}

export default ArrowLeftIcon;
