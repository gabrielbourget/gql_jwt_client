import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const FacebookIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaFacebookSquare size={size} color={color} />
  );
}

export default FacebookIcon;
