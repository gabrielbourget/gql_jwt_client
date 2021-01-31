import React from 'react';
import { FaToolbox } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ToolboxIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaToolbox size={size} color={color} />
  );
}

export default ToolboxIcon;
