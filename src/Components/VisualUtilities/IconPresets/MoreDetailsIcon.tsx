import React from 'react';
import { IoMdExit } from 'react-icons/io';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const MoreDetailsIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <IoMdExit size={size} color={color} />
  );
}
