import React from 'react';
import { GrWindows } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const MicrosoftIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrWindows size={size} color={color} />
  );
}

export default MicrosoftIcon;
