import { StyleSheet } from 'aphrodite';
import { IGridResourceBrowserProps } from './helpers';
import { ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { CARD_HEIGHT_TO_WIDTH_SCALE_COEFFICIENT } from './helpers';

export const styleGen = (props: IGridResourceBrowserProps, themeInfo: ThemeInfo, cardWidth: number) => {
  const { palette } = themeInfo;

  return StyleSheet.create({
    browserCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: palette.white,
    },
    browserContentCradle: {
      height: '100%',
      width: '100%',
      paddingTop: themeInfo.distance.one,
      paddingBottom: themeInfo.distance.two,
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, ${cardWidth}px)`,
      gridTemplateRows: `repeat(auto-fit, ${cardWidth * CARD_HEIGHT_TO_WIDTH_SCALE_COEFFICIENT}px)`,
      justifyContent: 'center',
      justifyItems: 'center',
      gridGap: '1rem',
      gridAutoFlow: 'dense',
      overflowY: 'scroll',
    },
    browserNoContentCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    noContentFallbackText: {
      ...themeInfo.typography.noContentFallbackText,
    }
  });
}
