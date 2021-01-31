/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React, { useContext } from 'react';
import { css } from 'aphrodite';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './CircleLoaderStyles';

export interface ICircleLoaderProps {
  spinnerColor?: string;
  spinnerTrackWidth?: string | number;
  spinnerTrackColor?: string;
  spinnerTrackIsTransparent?: boolean;
  duration?: string;
}

const CircleLoader: React.FC<ICircleLoaderProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {loader, loadingCircle} = styleGen(props, themeInfo);
  return (
    <div className={css(loader)}>
      <div className={css(loadingCircle)}/>
    </div>		
  );
}

export default CircleLoader;		
