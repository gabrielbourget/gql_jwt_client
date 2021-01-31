import React from 'react';
import { FaRegFileAudio } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const AudioFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaRegFileAudio size={size} color={color} />
  );
}

export default AudioFileIcon;
