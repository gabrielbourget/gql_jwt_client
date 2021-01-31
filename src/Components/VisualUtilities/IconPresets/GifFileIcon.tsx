import React from 'react';
import { AiOutlineFileGif } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const GifFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileGif size={size} color={color} />
  );
}

export default GifFileIcon;
