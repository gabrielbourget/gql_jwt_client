import React from 'react';
import { FaDropbox } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const DropboxIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaDropbox size={size} color={color} />
  );
}

export default DropboxIcon;
