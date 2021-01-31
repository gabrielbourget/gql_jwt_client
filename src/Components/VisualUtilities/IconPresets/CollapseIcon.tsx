import React from 'react';
import { AiOutlineShrink } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const CollapseIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineShrink size={size} color={color} />
  );
}

export default CollapseIcon;
