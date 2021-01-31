import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ChevronRightIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FiChevronRight size={size} color={color} />
  );
}

export default ChevronRightIcon;
