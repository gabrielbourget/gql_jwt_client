// -> Beyond Codebase
import React, { useContext, useState, useEffect } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import Indicator from '../../../VisualUtilities/Indicator/Indicator';
import { UIContext, ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { LEFT, ROUNDED } from '../../../../constants';
// -> Within Component
import { styleGen } from './DropdownItemStyles';
import { calibrateComponent, IDropdownItemProps, determineIfShowingSelectionIndicator, determineSelectionIndicatorColor } from './helpers';

const DropdownItem: React.FC<IDropdownItemProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selected: selectedStatus, id, label, item, selectionIndicatorGeometry,
    selectionIndicatorSize, showSelectionIndicatorIcon,
    selectionIndicatorIcon, selectionIndicatorLabelGap,
    selectionIndicatorPosition, disabled
  } = props;
  const [ selected, setSelectedStatus ] = useState(selectedStatus); // -> Initialize selected status according to outside info.

  useEffect(() => {
    setSelectedStatus(selectedStatus)
  }, [selectedStatus]);

  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo, selected);
  const {
    dropdownCradleStylechain, innerCradleStylechain, dropdownItemTextStylechain
  } = calibrateComponent(props, themeInfo, styles);

  const computedSelectionIndicatorLabelGap =
    selectionIndicatorLabelGap ? selectionIndicatorLabelGap : themeInfo.distance.one;
  const computedSelectionIndicatorGeometry = selectionIndicatorGeometry ? selectionIndicatorGeometry : ROUNDED;

  const onSelectItem = (selected: boolean, id: string, item: any) => {
    // -> Invoke callback function passed in from props for when an item is clicked on.
    const { onSelectItem } = props;
    onSelectItem(selected, id, item);
    setSelectedStatus(!selected);
  }

  const computedOnClick = disabled ? () => {} : () => onSelectItem(selected, id, item);

  return (
    <div className={dropdownCradleStylechain} onClick={computedOnClick}>
      {
        (selectionIndicatorPosition === LEFT) ? (
          <div className={innerCradleStylechain}>
            {
              (determineIfShowingSelectionIndicator(props)) && (
                <div className={css(styles.selectionIndicatorCradle)}>
                  <Indicator
                    active={selected}
                    geometry={computedSelectionIndicatorGeometry}
                    size={selectionIndicatorSize}
                    color={determineSelectionIndicatorColor(props, themeInfo)}
                    showActiveIcon={showSelectionIndicatorIcon}
                    activeIcon={selectionIndicatorIcon}
                    id={id}
                    onClick={() => onSelectItem(selected, id, item)}
                  />
                </div>
              )
            }
            <div style={{ marginRight: computedSelectionIndicatorLabelGap }}></div>
            <p className={dropdownItemTextStylechain}>{label}</p>
          </div>
        ) : (
          <div className={innerCradleStylechain}>
            <p className={dropdownItemTextStylechain}>{label}</p>
            <div style={{ marginRight: computedSelectionIndicatorLabelGap }}></div>
            {
              (determineIfShowingSelectionIndicator(props)) && (
                <div className={css(styles.selectionIndicatorCradle)}>
                  <Indicator
                    active={selected}
                    geometry={computedSelectionIndicatorGeometry}
                    size={selectionIndicatorSize}
                    color={determineSelectionIndicatorColor(props, themeInfo)}
                    showActiveIcon={showSelectionIndicatorIcon}
                    activeIcon={selectionIndicatorIcon}
                    id={id}
                    onClick={() => onSelectItem(selected, id, item)}
                  />
                </div>
              )
            }
          </div>

        )
      }
    </div>
  );
}

DropdownItem.defaultProps = {
  selected: false,
  height: 25,
  selectionIndicatorSize: 12,
}

export default DropdownItem;
