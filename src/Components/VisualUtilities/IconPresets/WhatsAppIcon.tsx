import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const WhatsAppIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <FaWhatsappSquare size={size} color={color} />
  );
}

export default WhatsAppIcon;
