import { StyleSheet } from 'aphrodite';
import { IListItemProps } from './ClickableListItem';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: IListItemProps, themeInfo: ThemeInfo) => {
  const { customCradleStyles, customTextStyles } = props;
  const { palette } = themeInfo;

  return StyleSheet.create({
    listItemCradle: {
      height: 'auto',
      width: '100%',
      padding: themeInfo.distance.one,
      display: 'flex',
      alignItems: 'center',
      borderRadius: themeInfo.borderRadii.one,
      transition: themeInfo.transitions.bgColorTransition,
      ':hover': {
        cursor: 'pointer',
        backgroundColor: palette.grey1,
      },
    },
    listItemTextStyle: {
      ...themeInfo.typography.default,
    },
    customCradleStyles: { ...customCradleStyles },
    customTextStyles: { ...customTextStyles }
  });
}
