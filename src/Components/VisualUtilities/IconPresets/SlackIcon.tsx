import React from 'react';
import { RiSlackLine } from 'react-icons/ri';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const SlackIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <RiSlackLine size={size} color={color} />
  );
}

export default SlackIcon;
