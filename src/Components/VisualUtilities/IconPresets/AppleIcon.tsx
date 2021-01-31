import React from 'react';
import { GrApple } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const AppleIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrApple size={size} color={color} />
  );
}

export default AppleIcon;
