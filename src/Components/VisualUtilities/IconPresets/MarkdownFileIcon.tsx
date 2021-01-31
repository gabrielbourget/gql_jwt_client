import React from 'react';
import { AiOutlineFileMarkdown } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const MarkdownFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFileMarkdown size={size} color={color} />
  );
}

export default MarkdownFileIcon;
