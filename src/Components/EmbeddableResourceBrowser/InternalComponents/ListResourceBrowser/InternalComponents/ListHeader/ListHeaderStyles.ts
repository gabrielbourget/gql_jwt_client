import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import {
  DEFAULT_CELL_PADDING, DEFAULT_ICON_COLUMN_WIDTH, DEFAULT_NAME_COLUMN_WIDTH
} from '../../constants';
import { IListHeaderProps } from './helpers';

export const styleGen = (props: IListHeaderProps, themeInfo: ThemeInfo) => {
  const {
    height, iconColumnWidth, nameColumnWidth, customListHeaderCradleStyles,
    customIconColumnCradleStyles, customNameColumnCradleStyles,
    customNameColumnTextStyles, customTypesColumnCradleStyles,
    customTypesColumnTextStyles
  } = props;
  const { palette } = themeInfo;

  const computedIconColumnWidth = iconColumnWidth ? iconColumnWidth : DEFAULT_ICON_COLUMN_WIDTH;
  const computedNameColumnWidth = nameColumnWidth ? nameColumnWidth : DEFAULT_NAME_COLUMN_WIDTH;
  const computedListHeaderBorderBottom = `${themeInfo.distance.namedVariants.hairline}px solid ${palette.grey1}`;

  return StyleSheet.create({
    listHeaderCradle: {
      height: height ? height : 'min-content',
      width: '100%',
      display: 'flex',
      backgroundColor: palette.white,
      borderBottom: computedListHeaderBorderBottom,
    },
    iconColumnCradle: {
      height: '100%',
      width: computedIconColumnWidth,
      padding: DEFAULT_CELL_PADDING,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nameColumnCradle: {
      height: '100%',
      width: computedNameColumnWidth,
      padding: DEFAULT_CELL_PADDING,
      display: 'flex',
      alignItems: 'center',
    },
    nameColumnText: {
      ...themeInfo.typography.default,
      color: palette.grey3,
    },
    typesColumnCradle: {
      height: '100%',
      width: '100%',
      padding: DEFAULT_CELL_PADDING,
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    typesColumnText: {
      ...themeInfo.typography.default,
      color: palette.grey3,
    },
    customListHeaderCradleStyles: { ...customListHeaderCradleStyles },
    customIconColumnCradleStyles: { ...customIconColumnCradleStyles },
    customNameColumnCradleStyles: { ...customNameColumnCradleStyles },
    customNameColumnTextStyles: { ...customNameColumnTextStyles },
    customTypesColumnCradleStyles: { ...customTypesColumnCradleStyles },
    customTypesColumnTextStyles: { ...customTypesColumnTextStyles },
  });
}