import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { IClickableItemListProps } from './helpers';

export const styleGen = (props: IClickableItemListProps, themeInfo: ThemeInfo) => {
  const {
    items
  } = props;
  const { palette } = themeInfo;

  return StyleSheet.create({
    sectionTitle: { ...themeInfo.typography.sectionTitle },
    noContentFallbackText: {
      ...themeInfo.typography.noContentFallbackText,
      textAlign: 'center',
    },
    quantityTotal: {
      height: 'auto',
      width: 'auto',
      minHeight: 25,
      minWidth: 25,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      backgroundColor: palette.primary,
      ...themeInfo.fonts.tertiary.heavy,
      color: palette.white,
      fontSize: '1.2rem',
    },
    componentCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    titleBarCradle: {
      height: 'min-content',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleBarRightCradle: {
      height: '100%',
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    itemsListCradle: {
      height: '100%',
      width: '100%',
      paddingTop: themeInfo.distance.two,
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: (items && items.children && items.children.length > 0) ? 'flex-start' : 'center',
      overflowY: 'scroll',
    },
  });
}

