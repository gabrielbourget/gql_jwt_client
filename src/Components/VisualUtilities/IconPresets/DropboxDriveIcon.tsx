import React from 'react';
import { AiOutlineDropbox } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const DropboxDriveIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineDropbox size={size} color={color} />
  );
}

export default DropboxDriveIcon;
