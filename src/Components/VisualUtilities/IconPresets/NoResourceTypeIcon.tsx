import React from 'react';
import { AiOutlineFileExclamation } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const NoResourceTypeIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileExclamation size={size} color={color} />
  );
}

export default NoResourceTypeIcon;
