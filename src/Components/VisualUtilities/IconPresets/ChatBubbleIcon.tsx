import React from 'react';
import { BsChatFill } from 'react-icons/bs';

interface IIconPresetProps {
  size?: number;
  color?: string;
}

export const ChatBubbleIcon: React.FC<IIconPresetProps> = (props) => {
  const { size, color } = props;

  return (
    <BsChatFill size={size} color={color} />
  );
}

export default ChatBubbleIcon;
