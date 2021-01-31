import React from 'react';
import { GrSearch } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const SearchIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrSearch size={size} color={color} />
  );
}

export default SearchIcon;
