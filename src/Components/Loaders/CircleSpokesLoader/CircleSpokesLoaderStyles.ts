import { StyleSheet } from 'aphrodite';
import { ICircleSpokesLoaderProps } from './CircleSpokesLoader';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: ICircleSpokesLoaderProps, themeInfo: ThemeInfo) => {
  const { color, spokeSize, duration } = props;
  const { palette } = themeInfo;

  const spokeTranslate = '100%';
  const spokeTransformOrigin = `calc(${spokeTranslate} * -1)`;
  const spoke_size = 7.5; //spokeSize ? spokeSize : 7.5;
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
    loadingSpokes: {
      position: 'relative',
      margin: 'auto',
      height: 45
    },
    spokeContainer: {
      position: 'absolute',
      top: '100%',
      left: `calc(50% - ${spoke_size}*1.5)`,
      transformOrigin: `50% ${spokeTransformOrigin}`,

      ':nth-of-type(0n+1)': {
        transform: `translateX(${spokeTranslate}) rotate(-90deg)`,
        animationDelay: `calc((${animationDuration}/1.14286) * -1)`
      },

      ':nth-of-type(0n+2)': {
        transform: `translateX(${spokeTranslate}) rotate(-45deg)`,
        animationDelay: `calc((${animationDuration}/1.33333) * -1)`
      },

      'nth-of-type(0n+3)': {
        transform: `translateX(${spokeTranslate})`,
        animationDelay: `calc((${animationDuration}/1.6) * -1)`
      },

      'nth-of-type(0n+4)': {
        transform: `translateX(${spokeTranslate}) rotate(45deg)`,
        animationDelay: `calc((${animationDuration}/2) * -1)`
      },

      'nth-of-type(0n+5)': {
        transform: `translateX(${spokeTranslate}) rotate(90deg)`,
        animationDelay: `calc((${animationDuration}/2.66667) * -1)`
      },

      'nth-of-type(0n+6)': {
        transform: `translateX(${spokeTranslate}) rotate(135deg)`,
        animationDelay: `calc((${animationDuration}/4) * -1)`
      },

      'nth-of-type(0n+7)': {
        transform: `translateX(${spokeTranslate}) rotate(180deg)`,
        animationDelay: `calc((${animationDuration}/8) * -1)`
      },

      'nth-of-type(0n+8)': {
        transform: `translateX(${spokeTranslate}) rotate(225deg)`,
        animationDelay: 0
      }
    },
    spoke: {
      // - TODO: -> Something wrong with these calculations, coming out to 0x0 and nothing showing for the loader.
      //            Debug Note: Giving hardcoded width and height here makes some of the spokes show up.
      width: `calc(${spoke_size} / 1.5)`,
      height: `calc(${spoke_size} * 2.25)`,
      animationName: spokeKeyframes,
      animationDuration,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDelay: 'inherit',
      background: color ? color : palette.black,
    }
  });
}

const spokeKeyframes = {
  '0%': { opacity: 1 },
  '100%': { opacity: 0.1 }
};
