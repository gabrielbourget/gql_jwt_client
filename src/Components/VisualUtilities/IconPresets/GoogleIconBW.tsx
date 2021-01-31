import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const GoogleIconBW: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <IoLogoGoogle size={size} color={color} />
  );
}

export default GoogleIconBW;
