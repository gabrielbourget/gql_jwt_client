/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React, { useContext } from 'react';
import { css } from 'aphrodite';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './HorizontalBubblesLoaderStyles';

export interface IHorizontalBubblesLoaderProps {
  color?: string;
  bubbleSize?: string | number;
  duration?: string;
}

const HorizontalBubblesLoader: React.FC<IHorizontalBubblesLoaderProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { loaderCradle, bubbleContainer, bubble } = styleGen(props, themeInfo);

  return (
    <div className={css(loaderCradle)}>
      <div className={css(bubbleContainer)}>
        <div className={css(bubble)}></div>
      </div>
      <div className={css(bubbleContainer)}>
        <div className={css(bubble)}></div>
      </div>
      <div className={css(bubbleContainer)}>
        <div className={css(bubble)}></div>
      </div>
    </div>
  );
}

export default HorizontalBubblesLoader;
