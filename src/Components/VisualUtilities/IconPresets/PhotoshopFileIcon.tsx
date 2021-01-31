import React from 'react';
import { DiPhotoshop } from 'react-icons/di';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const PhotoshopFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <DiPhotoshop size={size} color={color} />
  );
}

export default PhotoshopFileIcon;
