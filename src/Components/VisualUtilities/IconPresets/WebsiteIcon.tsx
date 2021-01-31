import React from 'react';
import { FaGlobe } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const WebsiteIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaGlobe size={size} color={color} />
  );
}

export default WebsiteIcon;
