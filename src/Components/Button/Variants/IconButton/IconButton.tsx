import React from 'react';
import Button from '../../Button';
import { IButtonProps } from '../../helpers';

const IconButton: React.FC<IButtonProps> = (props) => {
  const { icon, onClick, ...rest } = props;

  return (
    <Button
      icon={icon}
      transparent
      buttonCradlePadding="none"
      onClick={onClick}
      {...rest}
    />
  );
}

export default IconButton;
