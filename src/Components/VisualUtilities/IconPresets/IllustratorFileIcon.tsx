import React from 'react';
import { DiIllustrator } from 'react-icons/di';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const IllustratorFileIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <DiIllustrator size={size} color={color} />
  );
}

export default IllustratorFileIcon;
