import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const LinkedInIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaLinkedin size={size} color={color} />
  );
}

export default LinkedInIcon;
