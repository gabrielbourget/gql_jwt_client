import React from 'react';
import { FaYoutube } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const YoutubeIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaYoutube size={size} color={color} />
  );
}

export default YoutubeIcon;
