import React from 'react';
import { MdClose } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const XIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdClose size={size} color={color} />
  );
}

export default XIcon;
