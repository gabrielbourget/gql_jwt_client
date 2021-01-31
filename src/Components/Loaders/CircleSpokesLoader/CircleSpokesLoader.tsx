/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React, { useContext } from 'react';
import { css } from 'aphrodite';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './CircleSpokesLoaderStyles';

export interface ICircleSpokesLoaderProps {
  color?: string;
  spokeSize?: string | number;
  duration?: string;
}

const CircleSpokesLoader: React.FC<ICircleSpokesLoaderProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { loader, loadingSpokes, spokeContainer, spoke } = styleGen(props, themeInfo);

		return (
      <div className={css(loader)}>
        <div className={css(loadingSpokes)}>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
          <div className={css(spokeContainer)}>
            <div className={css(spoke)}></div>
          </div>
        </div>
      </div>
		);
}

export default CircleSpokesLoader;
