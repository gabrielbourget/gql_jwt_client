import React from 'react';
import { AiOutlineFileExcel } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ExcelFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileExcel size={size} color={color} />
  );
}

export default ExcelFileIcon;
