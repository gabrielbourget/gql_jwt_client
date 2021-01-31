import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const CheckmarkIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <IoIosCheckmark size={size} color={color} />
  );
}

export default CheckmarkIcon;
