import React from 'react';
import { StyleSheet, css } from 'aphrodite';

interface ILinkWrapperProps {
  customStyles?: any;
  target?: string;
  link: string;
  children: any;
}

const LinkWrapper: React.FC<ILinkWrapperProps> = (props) => {
  const { link, children, target } = props;
  const { customStyles } = styleGen(props);

  return (
    <a
      href={link}
      className={css(customStyles)}
      rel="noopener noreferrer nofollow"
      target={target}
    >
      { children }
    </a>
  );
}

LinkWrapper.defaultProps = {
  target: '_blank',
}

const styleGen = (props: ILinkWrapperProps) => {
  const { customStyles } = props;

  return StyleSheet.create({
    customStyles: { ...customStyles }
  });
}

export default LinkWrapper;
