// -> Beyond Codebase
import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { renderResourceTypeTags } from '../../../../helpers';
import { ORTHOGONAL } from '../../../../../../constants';
// -> Within Component
import { styleGen } from './ResourceCardStyles';
import { IResourceCardProps, calibrateComponent } from './helpers';

const ResourceCard: React.FC<IResourceCardProps> = (props) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [ hoverState, setHoverState ] = useState(false);
  const [ nameOverflowStatus, setNameOverflowStatus ] = useState(false);

  useLayoutEffect(() => {
    const clientHeight = footerRef.current?.clientHeight;
    const scrollHeight = footerRef.current?.scrollHeight;

    if (clientHeight && scrollHeight) {
      const nameOverflowed = (clientHeight < scrollHeight) ? true : false;
      setNameOverflowStatus(nameOverflowed);
    }
  }, []);

  const { icon, name, types, onClick } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo, nameOverflowStatus);
  const {
    cardCradleStylechain, iconCradleStylechain, typesCradleStylechain,
    footerCradleStylechain, footerTextStylechain
  } = calibrateComponent(props, themeInfo, styles, hoverState);

  return (
    <div
      className={cardCradleStylechain}
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
      onClick={onClick}
    >
      <div className={iconCradleStylechain}>
        <div style={{ marginBottom: themeInfo.distance.four }}>{icon}</div>
        <div className={typesCradleStylechain}>
          { renderResourceTypeTags(styles, themeInfo, types) }
        </div>
      </div>
      <div className={footerCradleStylechain} ref={footerRef}>
        <p className={footerTextStylechain}>{name}</p>
      </div>
    </div>
  );
}

ResourceCard.defaultProps = {
  cardGeometry: ORTHOGONAL
}

export default ResourceCard;
