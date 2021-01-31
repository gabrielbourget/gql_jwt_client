import React from 'react';
import { MdEmail } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const EmailIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdEmail size={size} color={color} />
  );
}

export default EmailIcon;
