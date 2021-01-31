import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const DocumentFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileText size={size} color={color} />
  );
}

export default DocumentFileIcon;
