import cloneDeep from 'lodash.clonedeep';

export interface IReducerAction {
  type: string;
  payload?: any;
}

export interface IDropdownState {
  isOpen: boolean;
  items?: IDropdownItem[];
  baseItem?: IDropdownItem;
  selectedItems: IDropdownItem[];
  multiSelectMode: boolean;
  dropCradleInStatus: boolean;
}

export interface IDropdownItem {
  id: string;
  label: string;
}

// -> Actions
const OPEN_DROPDOWN_ACTION = "OPEN_DROPDOWN_ACTION";
const CLOSE_DROPDOWN_ACTION = "CLOSE_DROPDOWN_ACTION";
const TOGGLE_DROPDOWN_ACTION = "TOGGLE_DROPDOWN_ACTION";
const SET_SELECTED_ITEMS_ACTION = "SET_SELECTED_ITEMS_ACTION";
const SET_BASE_ITEM_ACTION = "SET_BASE_ITEM_ACTION";
const SET_ITEMS_ACTION = "SET_ITEMS_ACTION";

// -> Action Creators
export const openDropdown = (): IReducerAction => ({ type: OPEN_DROPDOWN_ACTION })
export const closeDropdown = (): IReducerAction => ({ type: CLOSE_DROPDOWN_ACTION })
export const toggleDropdown = (): IReducerAction => ({ type: TOGGLE_DROPDOWN_ACTION })
export const setSelectedItems = (items: IDropdownItem[]): IReducerAction => ({
  type: SET_SELECTED_ITEMS_ACTION,
  payload: items,
})
export const setBaseItem = (item: IDropdownItem): IReducerAction => ({
  type: SET_BASE_ITEM_ACTION,
  payload: item,
})
export const setItems = (items: IDropdownItem[]): IReducerAction => ({
  type: SET_ITEMS_ACTION,
  payload: items,
})

// -> Reducer
export const reducer = (
  state: IDropdownState,
  action: IReducerAction
): IDropdownState => {
  const stateCopy = cloneDeep(state);
  let {
    isOpen, items, selectedItems, baseItem, dropCradleInStatus
  } = stateCopy;

  switch(action.type) {
    case OPEN_DROPDOWN_ACTION:
      // console.log('[Dropdown Reducer]: Open Dropdown Action Fired');
      isOpen = true;
      dropCradleInStatus = true;
      return { ...stateCopy, isOpen, dropCradleInStatus };
    case CLOSE_DROPDOWN_ACTION:
      // console.log('[Dropdown Reducer]: Close Dropdown Action Fired');
      isOpen = false;
      dropCradleInStatus = false;
      return { ...stateCopy, isOpen, dropCradleInStatus };
    case TOGGLE_DROPDOWN_ACTION:
      // console.log('[Dropdown Reducer]: Toggle Dropdown Action Fired');
      isOpen = !isOpen;
      dropCradleInStatus = !dropCradleInStatus
      return { ...stateCopy, isOpen, dropCradleInStatus };
    case SET_SELECTED_ITEMS_ACTION:
      // console.log('[Dropdown Action]: Set Selected Items Action Fired');
      const selectedItemsToSet = action.payload;
      selectedItems = selectedItemsToSet;
      return { ...stateCopy, selectedItems };
    case SET_BASE_ITEM_ACTION:
      // console.log('[Dropdown Reducer]: Set Base Item Action Fired');
      const baseItemToSet = action.payload;
      baseItem = baseItemToSet;
      return { ...stateCopy, baseItem };
    case SET_ITEMS_ACTION:
      // console.log('[Dropdown Reducer]: Set Items Action Fired');
      const itemsToSet = action.payload;
      items = itemsToSet;
      return { ...stateCopy, items };
    default: break;
  }

  return { ...stateCopy };
}