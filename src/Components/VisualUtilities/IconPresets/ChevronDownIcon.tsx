import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ChevronDownIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FiChevronDown size={size} color={color} />
  );
}

export default ChevronDownIcon;
