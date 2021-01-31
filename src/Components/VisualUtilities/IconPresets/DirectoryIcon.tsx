import React from 'react';
import { AiOutlineFolder } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const DirectoryIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFolder size={size} color={color} />
  );
}

export default DirectoryIcon;
