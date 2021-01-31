import React from 'react';
import { MdArrowDownward } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ArrowDownIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdArrowDownward size={size} color={color} />
  );
}

export default ArrowDownIcon;
