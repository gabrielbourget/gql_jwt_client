import React from 'react';
import { MdFileDownload } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const DownloadIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdFileDownload size={size} color={color} />
  );
}

export default DownloadIcon;
