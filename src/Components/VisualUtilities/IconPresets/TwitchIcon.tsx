import React from 'react';
import { FaTwitch } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const TwitchIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaTwitch size={size} color={color} />
  );
}

export default TwitchIcon;
