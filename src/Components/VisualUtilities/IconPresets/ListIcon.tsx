import React from 'react';
import { FaThList } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ListIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaThList size={size} color={color} />
  );
}

export default ListIcon;
