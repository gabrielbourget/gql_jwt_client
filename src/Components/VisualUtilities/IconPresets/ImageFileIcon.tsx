import React from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ImageFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileImage size={size} color={color} />
  );
}

export default ImageFileIcon;
