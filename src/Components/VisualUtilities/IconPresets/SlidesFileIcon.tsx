import React from 'react';
import { RiSlideshowLine } from 'react-icons/ri';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const SlidesFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <RiSlideshowLine size={size} color={color} />
  );
}

export default SlidesFileIcon;
