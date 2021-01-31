import React from 'react';
import { IoLogoTwitter } from 'react-icons/io';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const TwitterIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <IoLogoTwitter size={size} color={color} />
  );
}

export default TwitterIcon;
