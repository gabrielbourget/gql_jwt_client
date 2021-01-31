// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
// import { ResourceBrowserHistory } from '../../../../../../DataStructures';
import IconButton from '../../../../../Button/Variants/IconButton/IconButton';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../../VisualUtilities/IconPresets';
import { UIContext, ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { styleGen } from './TopBarStyles';

// export interface ITopBarProps {
//   height?: number;
//   navigateBackward: any;
//   navigateForward: any;
//   dispatch: any;
//   history: ResourceBrowserHistory;
//   customCradleStyles?: any;
// }
export interface ITopBarProps {
  height?: number;
  navigateBackward: any;
  navigateForward: any;
  dispatch: any;
  history: string[];
  currentPosition: number,
  customCradleStyles?: any;
}

const TopBar: React.FC<ITopBarProps> = (props) => {
  const { navigateBackward, navigateForward, dispatch, history, currentPosition } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { topBarCradle, navigationButtonsCradle, customCradleStyles } = styleGen(props, themeInfo);
  const topBarCradleStylechain = css(topBarCradle, customCradleStyles);

  // console.log('GridResourceBrowser: TopBar: history -> ', history);
  // console.log('GridResourceBrowser: TopBar: current position -> ', currentPosition);

  const furthestBackHistoryPosition = 0;
  const furthestForwardHistoryPosition = (history.length - 1);
  // console.log('GridResourceBrowser: TopBar: furthest forward position -> ', furthestForwardHistoryPosition);
  const canMoveForwards = (currentPosition < furthestForwardHistoryPosition) ? true : false;
  // console.log('GridResourceBrowser: TopBar: canMoveForwards -> ', canMoveForwards);
  const canMoveBackwards = (currentPosition > furthestBackHistoryPosition) ? true : false;
  // console.log('GridResourceBrowser: TopBar: canMoveBackwards -> ', canMoveBackwards);

  return (
    <div className={topBarCradleStylechain}>
      <div className={css(navigationButtonsCradle)}>
        <IconButton
          icon={<ChevronLeftIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize } />}
          disabled={canMoveBackwards === false}
          onClick={() => dispatch(navigateBackward())}
        />
        <div style={{ marginRight: themeInfo.distance.one }}></div>
        <IconButton
          icon={<ChevronRightIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize } />}
          disabled={canMoveForwards === false}
          onClick={() => dispatch(navigateForward())}
        />
      </div>
    </div>
  );
}

export default TopBar;
