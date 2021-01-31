import React from 'react';
import { FaRegFileVideo } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const VideoFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaRegFileVideo size={size} color={color} />
  );
}

export default VideoFileIcon;
