import React from 'react';
import { FaVk } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const VKIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaVk size={size} color={color} />
  );
}

export default VKIcon;
