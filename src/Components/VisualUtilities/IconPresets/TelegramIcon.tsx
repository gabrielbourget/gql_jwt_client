import React from 'react';
import { FaTelegram } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const TelegramIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaTelegram size={size} color={color} />
  );
}

export default TelegramIcon;
