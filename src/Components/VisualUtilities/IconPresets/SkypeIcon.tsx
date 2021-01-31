import React from 'react';
import { GrSkype } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const SkypeIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrSkype size={size} color={color} />
  );
}

export default SkypeIcon;
