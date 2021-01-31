/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React, { useContext } from 'react';
import { css } from 'aphrodite';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './CircleBubblesLoaderStyles';

export interface ICircleBubbleLoaderProps {
  color?: string;
  bubbleSize?: string | number;
  duration?: string;
}

// - TODO: -> Fix visual issues with this loader component.
const CircleBubblesLoader: React.FC<ICircleBubbleLoaderProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { loader, loadingSpinningBubbles, bubbleContainer, bubble} = styleGen(props, themeInfo);

  return (
    <div className={css(loader)}>
      <div className={css(loadingSpinningBubbles)}>
        <div className={css(bubbleContainer)}>
          <div className={css(bubble)}></div>
        </div>
        <div className={css(bubbleContainer)}>
          <div className={css(bubble)}></div>
        </div>
        <div className={css(bubbleContainer)}>
          <div className={css(bubble)}></div>
        </div>
        <div className={css(bubbleContainer)}>
          <div className={css(bubble)}></div>
        </div>
        <div className={css(bubbleContainer)}>
          <div className={css(bubble)}></div>
        </div>
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
    </div>			
  );
}

export default CircleBubblesLoader;
