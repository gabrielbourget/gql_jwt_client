import React from 'react';
import { FcGoogle } from 'react-icons/fc';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const GoogleIconColor: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FcGoogle size={size} color={color} />
  );
}

export default GoogleIconColor;
