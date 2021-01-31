import { css } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { Resource } from '../../../Types';

export interface IClickableItemListProps {
  items?: Resource | any;
  listTitle: string;
  navigateToMoreDetails?: any;
  navigateToItem(itemID: string): void;
  moreDetailsIcon?: any;
  moreDetailsAvailable?: boolean;
  showItemQuantity?: boolean;
  noContentFallbackMessage?: string;
  customComponentCradleStyles?: any;
  customTitleBarCradleStyles?: any;
  customTitleBarRightCradleStyles?: any;
  customItemsListCradleStyles?: any;
}

export const calibrateComponent = (
  props: IClickableItemListProps,
  themeInfo: ThemeInfo,
  styles: any
) => {
  const {
    componentCradle, sectionTitle, titleBarCradle,
    titleBarRightCradle, itemsListCradle, customComponentCradleStyles,
    customListTitleTextStyles, customTitleBarCradleStyles,
    customTitleBarRightCradleStyles, customItemsListCradleStyles
  } = styles;

  const componentCradleStylechain = css(componentCradle, customComponentCradleStyles);
  const listTitleTextStylechain = css(sectionTitle, customListTitleTextStyles);
  const titleBarCradleStylechain = css(titleBarCradle, customTitleBarCradleStyles);
  const titleBarRightCradleStylechain = css(titleBarRightCradle, customTitleBarRightCradleStyles);
  const itemsListCradleStylechain = css(itemsListCradle, customItemsListCradleStyles);

  return {
    componentCradleStylechain, listTitleTextStylechain, titleBarCradleStylechain,
    titleBarRightCradleStylechain, itemsListCradleStylechain
  };
}