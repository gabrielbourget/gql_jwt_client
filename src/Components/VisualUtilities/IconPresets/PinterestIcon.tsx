import React from 'react';
import { GrPinterest } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const PinterestIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrPinterest size={size} color={color} />
  );
}

export default PinterestIcon;
