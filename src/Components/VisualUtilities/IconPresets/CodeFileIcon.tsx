import React from 'react';
import { DiCodeBadge } from 'react-icons/di';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const CodeFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <DiCodeBadge size={size} color={color} />
  );
}

export default CodeFileIcon;
