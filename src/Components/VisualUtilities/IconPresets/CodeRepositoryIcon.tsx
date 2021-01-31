import React from 'react';
import { DiGit } from 'react-icons/di';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const CodeRepositoryIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <DiGit size={size} color={color} />
  );
}

export default CodeRepositoryIcon;
