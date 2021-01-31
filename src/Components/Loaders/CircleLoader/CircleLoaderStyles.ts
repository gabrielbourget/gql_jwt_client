import { StyleSheet } from 'aphrodite';
import { ICircleLoaderProps } from './CircleLoader';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: ICircleLoaderProps, themeInfo: ThemeInfo) => {
  const { spinnerColor, duration } = props;
  const { palette } = themeInfo;

  const computedSpinnerTrackColor = determineSpinnerTrackColor(props, palette);
  // const computedSpinnerTrackWidth = spinnerTrackWidth ? spinnerTrackWidth : '4px';

  return StyleSheet.create({
    loader: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingCircle: {
      margin: '0 auto',
      width: 40,
      height: 40,
      borderRadius: '50%',
      position: 'relative',
      animationName: spinKeyframes,
      animationDuration: duration ? duration : '1.25s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      borderRight: `4px solid ${computedSpinnerTrackColor}`,
      borderTop: `4px solid ${computedSpinnerTrackColor}`,
      borderLeft: spinnerColor ? `4px solid ${spinnerColor}` : `4px solid ${palette.grey4}`,
      borderBottom: `4px solid ${computedSpinnerTrackColor}`,

      // ':before': {
      //   content: '',
      //   width: 40,
      //   height: 40,
      //   borderRadius: '50%',
      //   display: 'block',
      //   position: 'absolute',
      //   left: -4,
      //   right: -4,
      //   borderRight: color ? `4px solid ${color}` : `4px solid ${palette.grey3}`,
      //   borderTop: color ? `4px solid ${color}` : `4px solid ${palette.grey3}`,
      //   borderLeft: color ? `4px solid ${color}` : `4px solid ${palette.black}`,
      //   borderBottom: color ? `4px solid ${color}` : `4px solid ${palette.grey3}`,
      // }
    }
  });
}

const spinKeyframes = {
  '100%': { transform: 'rotate(360deg)' }
};

const determineSpinnerTrackColor = (props: ICircleLoaderProps, palette: any): string => {
  const { spinnerTrackColor, spinnerTrackIsTransparent } = props;

  let computedSpinnerTrackColor = '';
  if (spinnerTrackIsTransparent) {
    computedSpinnerTrackColor = 'transparent';
  } else if (spinnerTrackColor) {
    computedSpinnerTrackColor = spinnerTrackColor;
  } else {
    computedSpinnerTrackColor = palette.grey1;
  }

  return computedSpinnerTrackColor;
}
