import React from 'react';
import { MdMoreVert } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const ContextMenuVerticalIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdMoreVert size={size} color={color} />
  );
}

export default ContextMenuVerticalIcon;
