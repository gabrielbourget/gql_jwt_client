import React from 'react';
import { AiOutlineFileWord } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const WordDocumentFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileWord size={size} color={color} />
  );
}

export default WordDocumentFileIcon;
