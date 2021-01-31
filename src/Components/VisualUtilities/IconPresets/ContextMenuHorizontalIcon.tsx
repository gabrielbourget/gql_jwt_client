import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ContextMenuHorizontalIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdMoreHoriz size={size} color={color} />
  );
}

export default ContextMenuHorizontalIcon;
