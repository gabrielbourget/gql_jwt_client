/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React, { useContext } from 'react';
import { css } from 'aphrodite';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './ShiftingVerticalBarsLoaderStyles';

export interface IShiftingVerticalBarsLoaderProps {
  color?: string;
  duration?: string;
  barSize?: string | number;
}

const ShiftingVerticalBarsLoader: React.FC<IShiftingVerticalBarsLoaderProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { loaderCradle, bar } = styleGen(props, themeInfo);

  return (
    <div className={css(loaderCradle)}>
      <div className={css(bar)}></div>
      <div className={css(bar)}></div>
      <div className={css(bar)}></div>
      <div className={css(bar)}></div>
      <div className={css(bar)}></div>
    </div>
  );
}

export default ShiftingVerticalBarsLoader;


