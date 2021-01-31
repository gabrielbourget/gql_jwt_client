import { StyleSheet } from 'aphrodite';
import { IHorizontalBubblesLoaderProps } from './HorizontalBubblesLoader';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: IHorizontalBubblesLoaderProps, themeInfo: ThemeInfo) => {
  const { color, bubbleSize, duration } = props;
  const { palette } = themeInfo;

  const bubble_size = bubbleSize ? bubbleSize : 7.5;

  return StyleSheet.create({
    loaderCradle: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bubbleContainer: {
      display: 'inline-block',
      width: bubble_size,
      height: bubble_size,
      margin: '0 3.5px',

      ':nth-of-type(2n)': {
        animationDelay: '-0.3s'
      },

      ':nth-of-type(3n)': {
        animationDelay: '-0.6s'
      }
    },
    bubble: {
      borderRadius: '50%',
      height: '100%',
      width: '100%',
      background: color ? color : palette.black,
      transformOrigin: '50% 50%',
      animationName: bubbleKeyFrames,
      animationDuration: duration ? duration : '1.5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDelay: 'inherit',
    }
  });
};

const bubbleKeyFrames = {
  '0%, 100%': { transform: 'scale(0)' },
  '50%': { transform: 'scale(1)' }
};
