import React from 'react';
import { FaGoogleDrive } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const GoogleDriveIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaGoogleDrive size={size} color={color} />
  );
}

export default GoogleDriveIcon;
