import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ChevronLeftIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FiChevronLeft size={size} color={color} />
  );
}

export default ChevronLeftIcon;
