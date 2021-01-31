import React from 'react';
import { IoMdPerson } from 'react-icons/io';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const PersonIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <IoMdPerson size={size} color={color} />
  );
}

export default PersonIcon;
