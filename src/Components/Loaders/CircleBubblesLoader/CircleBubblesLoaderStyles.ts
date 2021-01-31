import { StyleSheet } from 'aphrodite';
import { ICircleBubbleLoaderProps } from './CircleBubblesLoader';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: ICircleBubbleLoaderProps, themeInfo: ThemeInfo) => {
  const { color, bubbleSize, duration } = props;
  const { palette } = themeInfo;

  const bubble_size = bubbleSize ? bubbleSize : 7.5;
  const spinningBubbleTranslate = '200%';
  const spinningBubbleTransformOrigin = `calc((${spinningBubbleTranslate} - 50%) * -1)`;
  const animationDuration = duration ? duration : '1.25s';

  return StyleSheet.create({
    loader: {
      margin: '0 auto',
      textAlign: 'center',
      width: 250,
      height: 50,
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    loadingSpinningBubbles: {
      position: 'relative',
      margin: 'auto'
    },
    bubbleContainer: {
      position: 'absolute',
      top: `calc(50% - ${bubble_size}/2)`,
      left: `calc(50% - ${bubble_size}/2)`,
      transformOrigin: `${spinningBubbleTransformOrigin} 50%`,

      ':nth-of-type(0n+1)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(-90deg)`,
        animationDelay: `calc((${animationDuration}/1.33333) * -1)`
      },

      ':nth-of-type(0n+2)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(-45deg)`,
        animationDelay: `calc((${animationDuration}/1.45454) * -1)`
      },

      'nth-of-type(0n+3)': {
        transform: `translateX(${spinningBubbleTranslate})`,
        animationDelay: `calc((${animationDuration}/1.6) * -1)`
      },

      'nth-of-type(0n+4)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(45deg)`,
        animationDelay: `calc((${animationDuration}/1.77778) * -1)`
      },

      'nth-of-type(0n+5)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(90deg)`,
        animationDelay: `calc((${animationDuration}/2) * -1)`
      },

      'nth-of-type(0n+6)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(135deg)`,
        animationDelay: `calc((${animationDuration}/2.28571) * -1)`
      },

      'nth-of-type(0n+7)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(180deg)`,
        animationDelay: `calc((${animationDuration}/2.66667) * -1)`
      },

      'nth-of-type(0n+8)': {
        transform: `translateX(${spinningBubbleTranslate}) rotate(225deg)`,
        animationDelay: `calc((${animationDuration}/3.2) * -1)`
      }
    },
    bubble: {
      width: bubble_size,
      height: bubble_size,
      borderRadius: '50%',
      animationName: bubbleKeyFrames,
      animationDuration,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDelay: 'inherit',
      background: color ? color : palette.black,
    }
  });
};

const bubbleKeyFrames = {
  '0%, 100%': { transform: 'scale(0)' },
  '50%': { transform: 'scale(1)' }
};
