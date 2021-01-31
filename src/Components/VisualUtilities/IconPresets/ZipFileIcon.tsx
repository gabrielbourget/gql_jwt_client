import React from 'react';
import { AiOutlineFileZip } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ZipFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileZip size={size} color={color} />
  );
}

export default ZipFileIcon;
