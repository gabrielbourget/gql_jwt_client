// -> Beyond Codebase
import React, { useContext, useReducer, useEffect } from 'react';
import cloneDeep from 'lodash.clonedeep';
import onClickOutside from "react-onclickoutside";
// -> Within Codebase
import Fade from '../AnimationUtilities/TransitionWrappers/Fade/Fade';
import { ChevronUpIcon, ChevronDownIcon } from '../VisualUtilities/IconPresets'
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { ROUNDED, COLOR, LEFT, RIGHT, } from '../../constants';
// -> Within Component
import DropdownItem from './InternalComponents/DropdownItem/DropdownItem';
import { styleGen } from './DropdownStyles';
import {
  calibrateComponent, IDropdownProps,
  determineBaseItemLabel, determineDropdownItemGap, 
} from './helpers';
import {
  IDropdownState, reducer, toggleDropdown, setSelectedItems, setBaseItem,
  setItems, openDropdown, closeDropdown, IDropdownItem
} from './stateManagement'

const EMPTY_LIST_ITEM = Object.freeze({
  id: '085753ab-c95c-49ee-91aa-aa29106b7450',
  label: '--'
});

// const Dropdown: React.FC<IDropdownProps> & { handleClickOutside?: () => any } = (props) => {

// -> Written as a non-arrow function to avoid a bug caused by "react-onclickoutside"
// - TODO: -> Union type is kind of ugly, consider refactor somehow
const Dropdown: React.FC<IDropdownProps> & { handleClickOutside?: () => any } = function(props) {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);

  const {
    baseItem, items: itemsFromProps, isOpen: isOpenFromProps, multiSelectMode,
    showBaseCradleIcon, backgroundColor, geometry, colorMode,
    hasSelectionIndicators, showAllSelectionIndicators,
    selectionIndicatorPosition, selectionIndicatorGeometry,
    selectionIndicatorSize, selectionIndicatorColor,
    showSelectionIndicatorIcon, selectionIndicatorIcon,
    selectionIndicatorLabelGap, separator, customDropdownItemCradleStyles,
    customDropdownItemTextStyles, openIcon, closedIcon, disabled,
    dropdownItemHeight, showInnerCradleUnderlay, customDropdownItemInnerCradleStyles,
    CustomBaseCradleComponent, CustomDropdownComponent
  } = props;

  const computedIsOpen = isOpenFromProps ? isOpenFromProps : false;
  const computedMultiSelectMode = multiSelectMode ? multiSelectMode : false;
  const computedOpenIcon = openIcon ? openIcon : (
    <ChevronUpIcon
      color={themeInfo.palette.black}
      size={themeInfo.styles.standardIconSize}
    />
  );
  const computedClosedIcon = closedIcon ? closedIcon : (
    <ChevronDownIcon
      color={themeInfo.palette.black}
      size={themeInfo.styles.standardIconSize}
    />
  );
  const computedDropdownItemGap = determineDropdownItemGap(props, themeInfo);
  const computedOnDropdownClick = disabled ? () => {} : () => toggleDropdownComponent();

  const initialDropdownState: IDropdownState = {
    isOpen: computedIsOpen,
    items: itemsFromProps,
    selectedItems: [],
    multiSelectMode: computedMultiSelectMode,
    dropCradleInStatus: true,
  };

  const [ state, dispatch ] = useReducer(reducer, initialDropdownState);
  const { isOpen, items, selectedItems, dropCradleInStatus } = state;

  // -> Set up logic that will allow the state data structure to reflect external
  //    property changes to the dropdown's open status, base item, and items.
  useEffect(() => {
    isOpenFromProps ? dispatch(openDropdown()) : dispatch(closeDropdown());
  }, [isOpenFromProps])
  
  useEffect(() => {
    dispatch(setBaseItem(baseItem));
  }, [baseItem]);

  useEffect(() => {
    if (items) dispatch(setItems(items));
  }, [items]);

  // -> When the screen is clicked from anywhere off the dropdown menu, it correspondingly closes.
  Dropdown.handleClickOutside = () => {
    console.log('bleep bloop');
    dispatch(closeDropdown());
  };

  // -> Generate base styles, and then run calibration logic to build
  //    combination arrays of them to be applied to the component elements.
  const styles = styleGen(props, themeInfo, state);
  const {
    dropdownCradleStylechain, baseCradleStylechain,
    baseItemTextStylechain, dropCradleStylechain
  } = calibrateComponent(props, themeInfo, styles);

  // -> The base cradle is clicked, opening or closing the dropdown based on its current state.
  const toggleDropdownComponent = () => {
    const { disabled } = props;

    if (disabled) return;
    dispatch(toggleDropdown());
  }

  // -> Dropdown item is clicked when the component is in single-select mode.
  const onSingleSelectDropdownItemClick = (isSelected: boolean, item: IDropdownItem) => {
    const { closeDropCradleOnSelect } = props;
    const { selectedItems } = state;
    const selectedItemsCopy = cloneDeep(selectedItems);

    if (isSelected) selectedItemsCopy.length = 0;
    if (!isSelected) {
      if (selectedItemsCopy.length === 0) {
        selectedItemsCopy.push(item);
      }
      else {
        selectedItemsCopy.length = 0;
        selectedItemsCopy.push(item);
      }
    }

    dispatch(setSelectedItems(selectedItemsCopy));
    if (closeDropCradleOnSelect) dispatch(toggleDropdown());
  }

  // -> Dropdown item is clicked when the component is in multi-select mode.
  const onMultiSelectDropdownItemClick = (isSelected: boolean, item: IDropdownItem) => {
    const { id } = item;
    const { selectionLimit, closeDropCradleOnSelect } = props;
    const { selectedItems } = state;
    const selectedItemsCopy = cloneDeep(selectedItems);

    // -> Exit condition if dropdown user has reached a predefined selection limit.
    if (selectionLimit && (selectedItems.length === selectionLimit)) return;

    if (!isSelected) selectedItemsCopy.push(item);
    else {
      let position;
      selectedItemsCopy.forEach((item, index) => {
        if (item.id === id) position = index;
      });

      if (position) selectedItemsCopy.splice(position, 1);
    }

    dispatch(setSelectedItems(selectedItemsCopy));
    if (closeDropCradleOnSelect) dispatch(toggleDropdown());
  }

  const computedOnSelectItem = (multiSelectMode) ? onMultiSelectDropdownItemClick : onSingleSelectDropdownItemClick;

  return (
    <div className={dropdownCradleStylechain}>
      <div className={baseCradleStylechain} onClick={computedOnDropdownClick}>
        {
          (CustomBaseCradleComponent) ? (
            (CustomBaseCradleComponent)
          ) : (
            <>
              <p className={baseItemTextStylechain}>{determineBaseItemLabel(props, state)}</p>
              <div style={{ marginRight: themeInfo.distance.one }}></div>
              {
                (showBaseCradleIcon) && (
                  <>
                    { (isOpen) ? computedOpenIcon : computedClosedIcon }
                  </>
                )
              }
            </>
          )
        }
      </div>
      {
        (isOpen) && (
          // - TODO: -> Troubleshoot getting leave animation to trigger correctly.
          <Fade inStatus={dropCradleInStatus}>  
            <div className={dropCradleStylechain}>
              {
                (CustomDropdownComponent) ? (
                  (CustomDropdownComponent)
                ) : (
                  <>
                    {
                      (items && (items.length > 0)) ? (
                        items.map((item: IDropdownItem, index: number) => {
                          const { id, label } = item;
                          const computedMarginTop = (index === 0) ? 0 : (computedDropdownItemGap / 2);
                          const computedMarginBottom = (index === (items?.length - 1)) ? 0 : (computedDropdownItemGap / 2);
                          const isSelected = !!(selectedItems.find((item: IDropdownItem) => item.id === id))

                          return (
                            <div key={id} style={{
                              marginTop: computedMarginTop,
                              marginBottom: computedMarginBottom,
                              justifyContent: 'space-around',
                              width: '100%',
                            }}>
                              <DropdownItem
                                selected={isSelected}
                                disabled={disabled}
                                id={(id) ? id : `${index}`} // -> Impose a unique id if none is provided externally.
                                label={label}
                                item={item}
                                onSelectItem={computedOnSelectItem}
                                height={dropdownItemHeight}
                                backgroundColor={backgroundColor}
                                colorMode={colorMode}
                                geometry={geometry}
                                hasSelectionIndicators={hasSelectionIndicators}
                                showAllSelectionIndicators={showAllSelectionIndicators}
                                selectionIndicatorPosition={selectionIndicatorPosition}
                                selectionIndicatorGeometry={
                                  selectionIndicatorGeometry ? selectionIndicatorGeometry : geometry
                                }
                                selectionIndicatorSize={selectionIndicatorSize}
                                selectionIndicatorColor={selectionIndicatorColor}
                                showSelectionIndicatorIcon={showSelectionIndicatorIcon}
                                selectionIndicatorIcon={selectionIndicatorIcon}
                                selectionIndicatorLabelGap={selectionIndicatorLabelGap}
                                showInnerCradleUnderlay={showInnerCradleUnderlay}
                                customDropdownItemCradleStyles={customDropdownItemCradleStyles}
                                customDropdownItemInnerCradleStyles={customDropdownItemInnerCradleStyles}
                                customDropdownItemTextStyles={customDropdownItemTextStyles}
                              />
                              {
                                (separator && (index < (items.length - 1))) && separator
                              }
                            </div>
                          );
                        })
                      ) : (
                        <DropdownItem
                          selected={false}
                          id={EMPTY_LIST_ITEM.id}
                          label={EMPTY_LIST_ITEM.label}
                          item={EMPTY_LIST_ITEM}
                          disabled={disabled}
                          customDropdownItemTextStyles={customDropdownItemTextStyles}
                        />
                      )
                    }
                  </>
                )
              }
            </div>
          </Fade>
        )
      }
    </div>
  );
}

Dropdown.defaultProps = {
  isOpen: false,
  disabled: false,
  closeDropCradleOnSelect: true,
  showBaseCradleIcon: true,
  raised: false,
  geometry: ROUNDED,
  colorMode: COLOR,
  multiSelectMode: false,
  hasSelectionIndicators: false,
  showAllSelectionIndicators: true,
  selectionIndicatorPosition: LEFT,
  baseCradleHeight: 30,
  baseCradleWidth: 120,
  dropCradleGap: 0,
  dropCradleAlignment: RIGHT,
  showInnerCradleUnderlay: true,
};

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
};

export default onClickOutside(Dropdown, clickOutsideConfig);
