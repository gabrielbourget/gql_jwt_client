// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { ORTHOGONAL } from '../../../../../../constants';
import { renderResourceTypeTags } from '../../../../helpers';
// -> Within Component
import { styleGen } from './ResourceListItemStyles';
import { calibrateComponent, IResourceListItemProps } from './helpers';

const ResourceListItem: React.FC<IResourceListItemProps> = (props) => {
  const { onClick, icon, name, types } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo);
  const {
    listItemCradleStylechain, innerCradleStylechain,
    iconColumnCradleStylechain, nameColumnCradleStylechain,
    nameColumnTextStylechain, typesColumnCradleStylechain
  } = calibrateComponent(props, themeInfo, styles);
  const { noContentFallbackText } = styles;

  const computedResourceName = name ? (
    <p className={nameColumnTextStylechain}>{name}</p>
  ) : (
    // - TODO: -> Internationalize Text
    <p className={css(noContentFallbackText)}>No name provided</p>
  );

  return (
    <div className={listItemCradleStylechain} onClick={onClick}>
      <div className={innerCradleStylechain}>
        <div className={iconColumnCradleStylechain}>{icon}</div>
        <div className={nameColumnCradleStylechain}>{computedResourceName}</div>
        <div className={typesColumnCradleStylechain}>
          { renderResourceTypeTags(styles, themeInfo, types) }
        </div>
      </div>
    </div>
  );
}

ResourceListItem.defaultProps = {
  listItemCradleGeometry: ORTHOGONAL,
  innerCradleGeometry: ORTHOGONAL
}

export default ResourceListItem;
