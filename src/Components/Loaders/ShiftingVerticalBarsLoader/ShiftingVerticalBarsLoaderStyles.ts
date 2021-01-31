import { StyleSheet } from 'aphrodite';
import { IShiftingVerticalBarsLoaderProps } from './ShiftingVerticalBarsLoader';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: IShiftingVerticalBarsLoaderProps, themeInfo: ThemeInfo) => {
  const { color, duration, barSize } = props;
  const { palette } = themeInfo;

  const bar_size = barSize ? barSize : 7.5;

  console.log('bar size -> ', bar_size);

  return StyleSheet.create({
    loaderCradle: {
      width: 150,
      height: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bar: {
      height: `calc(${bar_size} * 1.25)`,
      width: bar_size,
      margin: '0 1.5px',
      display: 'inline-block',
      background: color ? color : palette.black,
      animationName: pulseKeyFrames,
      animationDuration: duration ? duration : '1.2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',

      ':nth-of-type(0n+1)': { animationDelay: '0s' },
      ':nth-of-type(0n+2)': { animationDelay: '0.2s' },
      ':nth-of-type(0n+3)': { animationDelay: '0.4s' },
      ':nth-of-type(0n+4)': { animationDelay: '0.6s' },
      ':nth-of-type(0n+5)': { animationDelay: '0.8s' }
    }
  });
};

const pulseKeyFrames = {
  '0%, 75%': { transform: 'scale(1,1)' },
  '25%': { transform: 'scale(1,3)' }
};
