import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { CARD_HEIGHT_TO_WIDTH_SCALE_COEFFICIENT } from '../../helpers';
import { IResourceCardProps } from './helpers';

export const styleGen = (
  props: IResourceCardProps,
  themeInfo: ThemeInfo,
  nameOverflowStatus: boolean,
) => {
  const {
    cardWidth, customCardCradleStyles, customIconCradleStyles,
    customTypesCradleStyles, customFooterCradleStyles, customFooterTextStyles
  } = props;
  const { palette } = themeInfo;

  // - 1. Scale height as multiple of width.
  const computedCardHeight = cardWidth * CARD_HEIGHT_TO_WIDTH_SCALE_COEFFICIENT;
  // - 2. Set footer height as multiple of the height to width delta.
  const computedfooterCradleHeight = (computedCardHeight - cardWidth) * 2.8;
  // - 3. Remaining height for the card body is the height to footer height delta.
  const computediconCradleHeight = computedCardHeight - computedfooterCradleHeight;

  return StyleSheet.create({
    noContentFallbackText: {
      ...themeInfo.fonts.tertiary.italic,
      fontSize: '1.0rem',
      lineHeight: 1.1,
      color: palette.grey2,
    },
    cardCradle: {
      height: computedCardHeight,
      width: cardWidth,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: palette.white,
      boxShadow: themeInfo.shadows.one,

      ':hover': {
        cursor: 'pointer',
      }
    },
    cardCradleRounded: { borderRadius: themeInfo.borderRadii.one },
    iconCradle: {
      height: computediconCradleHeight,
      width: '100%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    typesCradle: {
      height: '100%',
      width: '100%',
      padding: themeInfo.distance.one,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: `repeat(auto-fill, 1fr)`,
      gridTemplateRows: `repeat(auto-fit, 1fr)`,
      gridGap: '0.5rem',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      textAlign: 'right'
    },
    footerCradle: {
      height: computedfooterCradleHeight,
      width: '100%',
      padding: themeInfo.distance.one,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      overflowY: 'scroll',
      // borderTopLeftRadius: themeInfo.borderRadii.one,
      // borderTopRightRadius: themeInfo.borderRadii.one,
      borderTop: `0.5px solid ${palette.grey1}`,
      boxShadow: nameOverflowStatus ? themeInfo.shadows.namedVariants.nameOverflowResourceCard : 'none',
      transition: themeInfo.transitions.bgColorTransition,
    },
    footerText: {
      ...themeInfo.typography.default,
    },
    footerHover: { backgroundColor: palette.grey1 },
    customCardCradleStyles: { ...customCardCradleStyles },
    customIconCradleStyles: { ...customIconCradleStyles },
    customTypesCradleStyles: { ...customTypesCradleStyles },
    customFooterCradleStyles: { ...customFooterCradleStyles },
    customFooterTextStyles: { ...customFooterTextStyles },
  });
}