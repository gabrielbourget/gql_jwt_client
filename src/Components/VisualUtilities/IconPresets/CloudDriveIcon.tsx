import React from 'react';
import { AiOutlineCloud } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const CloudDriveIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineCloud size={size} color={color} />
  );
}

export default CloudDriveIcon;
