import { css } from "aphrodite";
import { ThemeInfo } from "../../../../../UI_InfoProvider/UI_InfoProvider";
// import { ResourceBrowserHistory } from "../../../../../../DataStructures";

// export interface IListHeaderProps {
//   height?: number;
//   iconColumnWidth?: number;
//   nameColumnWidth?: number;
//   customListHeaderCradleStyles?: any;
//   customIconColumnCradleStyles?: any;
//   customNameColumnCradleStyles?: any;
//   customNameColumnTextStyles?: any;
//   customTypesColumnCradleStyles?: any;
//   customTypesColumnTextStyles?: any;
//   navigateBackward: any;
//   navigateForward: any;
//   history: ResourceBrowserHistory;
//   dispatch: any;
// }
export interface IListHeaderProps {
  height?: number;
  iconColumnWidth?: number;
  nameColumnWidth?: number;
  customListHeaderCradleStyles?: any;
  customIconColumnCradleStyles?: any;
  customNameColumnCradleStyles?: any;
  customNameColumnTextStyles?: any;
  customTypesColumnCradleStyles?: any;
  customTypesColumnTextStyles?: any;
  navigateBackward: any;
  navigateForward: any;
  history: string[];
  currentPosition: number,
  dispatch: any;
}

export const calibrateComponent = (
  props: IListHeaderProps,
  themeInfo: ThemeInfo,
  styles: any,
) => {
  const {
    customListHeaderCradleStyles, customIconColumnCradleStyles,
    customNameColumnCradleStyles, customNameColumnTextStyles,
    customTypesColumnCradleStyles, customTypesColumnTextStyles
  } = props;
  const {
    listHeaderCradle, iconColumnCradle, nameColumnCradle,
    nameColumnText, typesColumnCradle, typesColumnText
  } = styles;

  const listHeaderCradleStylechain = css(listHeaderCradle, customListHeaderCradleStyles);
  const iconColumnCradleStylechain = css(iconColumnCradle, customIconColumnCradleStyles);
  const nameColumnCradleStylechain = css(nameColumnCradle, customNameColumnCradleStyles);
  const nameColumnTextStylechain = css(nameColumnText, customNameColumnTextStyles);
  const typesColumnCradleStylechain = css(typesColumnCradle, customTypesColumnCradleStyles)
  const typesColumnTextStylechain = css(typesColumnText, customTypesColumnTextStyles);

  return {
    listHeaderCradleStylechain, iconColumnCradleStylechain,
    nameColumnCradleStylechain, nameColumnTextStylechain,
    typesColumnCradleStylechain, typesColumnTextStylechain,
  };
}