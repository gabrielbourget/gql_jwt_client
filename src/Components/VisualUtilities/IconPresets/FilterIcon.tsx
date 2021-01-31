import React from 'react';
import { TiFilter } from 'react-icons/ti';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const FilterIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <TiFilter size={size} color={color} />
  );
}

export default FilterIcon;
