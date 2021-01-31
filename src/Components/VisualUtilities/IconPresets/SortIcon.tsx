import React from 'react';
import { MdSort } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const SortIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdSort size={size} color={color} />
  );
}

export default SortIcon;
