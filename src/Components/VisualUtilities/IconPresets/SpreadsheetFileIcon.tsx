import React from 'react';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const SpreadsheetFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <BsFileEarmarkSpreadsheet size={size} color={color} />
  );
}

export default SpreadsheetFileIcon;
