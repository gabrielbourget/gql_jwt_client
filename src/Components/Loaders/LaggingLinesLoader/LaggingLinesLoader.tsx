/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React, { useContext } from 'react';
import { css } from 'aphrodite';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './LaggingLinesLoaderStyles';

export interface ILaggingLinesLoaderProps {
  color?: string;
  duration?: string | number;
}

const LaggingLinesLoader: React.FC<ILaggingLinesLoaderProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { loader, loadingSlide, slide } = styleGen(props, themeInfo);

  return(
    <div className={css(loader)}>
      <div className={css(loadingSlide)}>
        <div className={css(slide)}></div>
        <div className={css(slide)}></div>
        <div className={css(slide)}></div>
      </div>
    </div>
  );
}

export default LaggingLinesLoader;
