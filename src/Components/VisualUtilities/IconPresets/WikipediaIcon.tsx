import React from 'react';
import { FaWikipediaW } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const WikipediaIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaWikipediaW size={size} color={color} />
  );
}

export default WikipediaIcon;
