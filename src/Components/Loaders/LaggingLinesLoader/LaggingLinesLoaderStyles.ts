import { StyleSheet } from 'aphrodite';
import { ILaggingLinesLoaderProps } from './LaggingLinesLoader';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: ILaggingLinesLoaderProps, themeInfo: ThemeInfo) => {
  const { color, duration } = props;
  const { palette } = themeInfo;

  return StyleSheet.create({
    loader: {
      margin: '0 auto',
      width: 250,
      height: 50,
      textAlign: 'center',
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    loadingSlide: {
      position: 'relative',
      width: '25%',
      margin: '0 auto',
    },
    slide: {
      position: 'absolute',
      width: '25%',
      height: 5,
      background: color ? color : palette.black,
      animationName: slideKeyFrames,
      animationDuration: duration ? duration : 2.5,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',

      ':nth-of-type(0n+1)': {
        opacity: 0.2,
        transform: 'scale(1.4, 1)',
        animationDelay: '0.2s'
      },

      ':nth-of-type(0n+2)': {
        opacity: 0.4,
        transform: 'scale(1.2, 1)',
        animationDelay: '0.1s'
      },

      ':nth-of-type(0n+3)': {
        opacity: 0.8
      }
    }
  });
}

const slideKeyFrames = {
  '0%, 100%': { left: 0 },
  '50%': { left: '100%' }
}
