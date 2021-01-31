import React from 'react';
import { GrSpotify } from 'react-icons/gr';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const SpotifyIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <GrSpotify size={size} color={color} />
  );
}

export default SpotifyIcon;
