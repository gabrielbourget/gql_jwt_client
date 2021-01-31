// -> Beyond Codebase
import React, { useContext } from 'react';
// -> Within Codebase
import IconButton from '../../../../../Button/Variants/IconButton/IconButton';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../../VisualUtilities/IconPresets';
import { UIContext, ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import { styleGen } from './ListHeaderStyles';
import { IListHeaderProps, calibrateComponent } from './helpers';

const ListHeader: React.FC<IListHeaderProps> = (props) => {
  const { navigateBackward, navigateForward, dispatch, history, currentPosition } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo);
  const {
    listHeaderCradleStylechain, iconColumnCradleStylechain,
    nameColumnCradleStylechain, nameColumnTextStylechain,
    typesColumnCradleStylechain, typesColumnTextStylechain
  } = calibrateComponent(props, themeInfo, styles);

  const furthestBackHistoryPosition = 0;
  const furthestForwardHistoryPosition = (history.length - 1);
  const canMoveForwards = (currentPosition < furthestForwardHistoryPosition) ? true : false;
  const canMoveBackwards = (currentPosition > furthestBackHistoryPosition) ? true : false;

  return (
    <div className={listHeaderCradleStylechain}>
      <div className={iconColumnCradleStylechain}>
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
      <div className={nameColumnCradleStylechain}>
        {/* - TODO: -> Internationalize Text */}
        <p className={nameColumnTextStylechain}>Name</p>
      </div>
      <div className={typesColumnCradleStylechain}>
        {/* - TODO: -> Internationalize Text */}
        <p className={typesColumnTextStylechain}>Types</p>
      </div>
    </div>
  );
}

export default ListHeader;