import React from 'react';
import { FaVimeo } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const VimeoIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaVimeo size={size} color={color} />
  );
}

export default VimeoIcon;
