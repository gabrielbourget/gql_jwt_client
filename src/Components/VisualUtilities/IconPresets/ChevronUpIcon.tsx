import React from 'react';
import { FiChevronUp } from 'react-icons/fi';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ChevronUpIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FiChevronUp size={size} color={color} />
  );
}

export default ChevronUpIcon;
