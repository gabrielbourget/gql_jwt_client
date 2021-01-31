import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import {
  DEFAULT_ICON_COLUMN_WIDTH, DEFAULT_NAME_COLUMN_WIDTH, DEFAULT_CELL_PADDING
} from '../../constants';
import { IResourceListItemProps } from './helpers';

export const styleGen = (props: IResourceListItemProps, themeInfo: ThemeInfo) => {
  const {
    height, iconColumnWidth, nameColumnWidth, customListItemCradleStyles,
    customListItemCradleHoverStyles, customInnerCradleStyles, customInnerCradleHoverStyles,
    customIconColumnCradleStyles, customNameColumnCradleStyles,
    customNameColumnTextStyles, customTypesColumnCradleStyles
  } = props;
  const { palette } = themeInfo

  const computedIconColumnWidth = iconColumnWidth ? iconColumnWidth : DEFAULT_ICON_COLUMN_WIDTH;
  const computedNameColumnWidth = nameColumnWidth ? nameColumnWidth : DEFAULT_NAME_COLUMN_WIDTH;
  const computedInnerCradleGridTemplateColumns = `${computedIconColumnWidth}px ${computedNameColumnWidth}px 1fr`;

  return StyleSheet.create({
    noContentFallbackText: {
      ...themeInfo.typography.noContentFallbackText,
      ':hover': { cursor: 'inherit' },
    },
    listItemCradle: {
      height: height ? height : 'min-content',
      width: '100%',
      backgroundColor: palette.white,

      ':hover': {
        ...customListItemCradleHoverStyles,
      }
    },
    listItemCradleRounded: { borderRadius: themeInfo.borderRadii.one },
    listItemCradleRound: { borderRadius: 10000 },
    // -> Used for toggling things like selection and hover effects.
    innerCradle: {
      height: '100%',
      maxWidth: '100%',
      display: 'grid',
      alignItems: 'center',
      gridAutoFlow: 'column',
      gridTemplateColumns: computedInnerCradleGridTemplateColumns,

      ':hover': {
        ...customInnerCradleHoverStyles,
        cursor: 'pointer',
      },
    },
    innerCradleRounded: { borderRadius: themeInfo.borderRadii.one },
    innerCradleRound: { borderRadius: 10000 },
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
      flexWrap: 'wrap',
    },
    nameColumnText: {
      ...themeInfo.typography.default,
      ':hover': { cursor: 'inherit' },
    },
    typesColumnCradle: {
      height: '100%',
      width: '100%',
      // flex: 1,
      padding: DEFAULT_CELL_PADDING,
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: `repeat(auto-fill, auto)`,
      gridTemplateRows: `repeat(auto-fit, auto)`,
      gridGap: '0.5rem',
      alignItems: 'center',
    },
    customListItemCradleStyles: {...customListItemCradleStyles},
    customInnerCradleStyles: { ...customInnerCradleStyles },
    customIconColumnCradleStyles: { ...customIconColumnCradleStyles },
    customNameColumnCradleStyles: { ...customNameColumnCradleStyles },
    customNameColumnTextStyles: { ...customNameColumnTextStyles },
    customTypesColumnCradleStyles: { ...customTypesColumnCradleStyles },
  });
}
