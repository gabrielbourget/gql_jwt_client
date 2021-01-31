import React from 'react';
import { AiOutlineFrown } from 'react-icons/ai';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

const SadFaceIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <AiOutlineFrown size={size} color={color} />
  );
}

export default SadFaceIcon;
