// -> Beyond Codebase
import React, { useContext, useState } from 'react';
// import { css } from 'aphrodite';
// -> Within Codebase
import Button from '../Button/Button';
import { XIcon } from '../VisualUtilities/IconPresets';
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { ROUND } from '../../constants';
import { styleGuide } from '../../styleGuide/styleGuide';
// -> Within Component
import { styleGen } from './TagStyles';
import { ITagProps, calibrateComponent } from './helpers';

const Tag: React.FC<ITagProps> = (props) => {
  // -> If tag is not toggleable, the active state is to be the default.
  const {
    active, labelText, removeTag, id, toggleable,
    removeIconSize, removeable, onClick
  } = props;
  const [ tagActive, setTagActive ] = useState(active);
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo);
  const { tagCradleStylechain, tagTextStylechain } = calibrateComponent(props, styles, tagActive);


  const toggleStatus = (active?: boolean, labelText?: string, id?: string) => {
    // const { onClick } = props;
    let clickTagResult = null;

    // -> Some external function might determine if a tag should be toggleable to
    //    its active/inactive state (e.g. tags might be part of a larger picker
    //    component which only allows a certain number to be selected).
    if (onClick) {
      clickTagResult = onClick(active, labelText, id);

      if (clickTagResult) setTagActive(!tagActive);
    }
    else setTagActive(!tagActive);
  }
  
  const computedOnClick = toggleable ? () => toggleStatus(active, labelText, id) : () => {};

  return (
    <div className={tagCradleStylechain} onClick={computedOnClick}>
      <p className={tagTextStylechain}>{labelText}</p>
      {
        removeable && (
          <>
            <div style={{ marginRight: themeInfo.distance.two }}></div>
            <Button
              icon={<XIcon color={themeInfo.palette.white} size={removeIconSize} />}
              transparent
              onClick={(e: any) => {
                e.stopPropagation();
                removeTag(id);
              }}
            />
          </>
        )
      }
    </div>
  );
}

Tag.defaultProps = {
  toggleable: false,
  active: true,
  removeable: false,
  activeColor: styleGuide.palette.primary,
  removeIconSize: styleGuide.styles.standardIconSize,
  tagGeometry: ROUND,
  backgroundColorTransition: styleGuide.transitions.bgColorTransition,
}

export default Tag;
