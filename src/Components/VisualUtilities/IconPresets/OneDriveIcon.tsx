import React from 'react';
import { GrOnedrive } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const OneDriveIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrOnedrive size={size} color={color} />
  );
}

export default OneDriveIcon;
