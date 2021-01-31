import React from 'react';
import { AiOutlineExpandAlt } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ExpandIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineExpandAlt size={size} color={color} />
  );
}

export default ExpandIcon;
