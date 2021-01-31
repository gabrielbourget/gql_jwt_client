import React from 'react';
import { BsGridFill } from 'react-icons/bs';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const GridIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <BsGridFill size={size} color={color} />
  );
}

export default GridIcon;
