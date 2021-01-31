import React from 'react';
import { MdGroup } from 'react-icons/md';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const GroupOfPeopleIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <MdGroup size={size} color={color} />
  );
}

export default GroupOfPeopleIcon;
