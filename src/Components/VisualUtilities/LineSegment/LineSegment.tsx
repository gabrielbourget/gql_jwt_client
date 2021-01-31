import React from 'react';
import { css, StyleSheet } from 'aphrodite';
// import { VERTICAL, HORIZONTAL } from '../../../constants';
import { palette } from '../../../styleGuide/colors';
import { HORIZONTAL } from '../../../constants';

// - TODO: -> Figure out how to use direction constants here instead of hard coding strings
export interface ILineSegmentProps {
  height?: string | number;
  width?: string | number;
  size?: string | number;
  direction?: 'vertical' | 'horizontal';
  color?: string;
  customStyles?: any;
}

export const LineSegment: React.FC<ILineSegmentProps> = (props) => {
  const { direction } = props;
  const { vertical, horizontal, customStyles } = styleGen(props);

  const verticalStylechain = css(vertical, customStyles);
  const horizontalStylechain = css(horizontal, customStyles);
  const chosenDirectionStylechain = (direction === HORIZONTAL) ? horizontalStylechain : verticalStylechain;

  return (
    <div className={chosenDirectionStylechain} />
  );
}

LineSegment.defaultProps = {
  direction: HORIZONTAL,
  width: 50,
  height: 50,
  size: 2.5,
  color: palette.black,
}

const styleGen = (props: ILineSegmentProps) => {
  const { height, width, size, color, customStyles } = props;

  return StyleSheet.create({
    vertical: {
      backgroundColor: color,
      height,
      width: size,
    },
    horizontal: {
      backgroundColor: color,
      height: size,
      width,
    },
    customStyles: { ...customStyles }
  });
}

export default LineSegment;
