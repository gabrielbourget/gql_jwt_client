import React from 'react';
import { FaTumblr } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const TumblrIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaTumblr size={size} color={color} />
  );
}

export default TumblrIcon;
