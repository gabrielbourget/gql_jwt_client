import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const PDFFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFilePdf size={size} color={color} />
  );
}

export default PDFFileIcon;
