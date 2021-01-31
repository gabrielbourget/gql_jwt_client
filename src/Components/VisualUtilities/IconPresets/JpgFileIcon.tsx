import React from 'react';
import { AiOutlineFileJpg } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const JpgFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileJpg size={size} color={color} />
  );
}

export default JpgFileIcon;
