import React from 'react';
import { AiOutlineFilePpt } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const PowerpointFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFilePpt size={size} color={color} />
  );
}

export default PowerpointFileIcon;
