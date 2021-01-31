import { findResourceByID } from '../../helpers';
import cloneDeep from 'lodash.clonedeep';
import { Resource } from '../../Types';

export interface IReducerAction {
  type: string,
  payload?: any,
}

export interface IFilterCriteria {
  criteria: "None" | "Name" | "Type";
  criteriaArgument?: string;
}

export interface IEmbeddableResourceBrowserState {
  displayMode: 'Grid' | 'List';
  resourceBrowserWidth: number;
  history: string[];
  currentPosition: number;
  resources: Resource;
  currentResourceSubTree: Resource;
  // path: string[]; // -> Array of IDs corresponding to directory path from root of resources passed into the component.
  currentSortCriteria: "None" | "Name";
  currentSortDirection: "Ascending" | "Descending";
  currentFilterCriteria: IFilterCriteria;
}

// -> Action strings
const SET_DISPLAY_MODE_ACTION = "SWITCH_DISPLAY_MODE_ACTION";
const SET_RESOURCE_BROWSER_WIDTH_ACTION = "SET_RESOURCE_BROWSER_WIDTH_ACTION";
const NAVIGATE_TO_DIRECTORY_ACTION = "NAVIGATE_TO_DIRECTORY_ACTION";
const NAVIGATE_FORWARD_ACTION = "NAVIGATE_FORWARD_ACTION";
const NAVIGATE_BACKWARD_ACTION = "NAVIGATE_BACKWARD_ACTION";
const SET_SORT_CRITERIA_ACTION = "SET_SORT_CRITERIA_ACTION";
const SET_SORT_DIRECTION_ACTION = "SET_SORT_DIRECTION_ACTION";
const TOGGLE_SORT_DIRECTION_ACTION = "TOGGLE_SORT_DIRECTION_ACTION";
const SET_FILTER_CRITERIA_ACTION = "SET_FILTER_CRITERIA_ACTION";


// -> Action creators
export const setDisplayMode = (displayMode: "Grid" | "List"): IReducerAction => ({
  type: SET_DISPLAY_MODE_ACTION,
  payload: displayMode,
})

export const setResourceBrowserWidth = (resourceBrowserWidth: number): IReducerAction => ({
  type: SET_RESOURCE_BROWSER_WIDTH_ACTION,
  payload: resourceBrowserWidth,
})

export const navigateToDirectory = (id: string): IReducerAction => ({
  type: NAVIGATE_TO_DIRECTORY_ACTION,
  payload: id,
})

export const navigateForward = (): IReducerAction => ({ type: NAVIGATE_FORWARD_ACTION });
export const navigateBackward = (): IReducerAction => ({ type: NAVIGATE_BACKWARD_ACTION });

export const setSortCriteria = (criteria: "None" | "Name"): IReducerAction => ({
  type: SET_SORT_CRITERIA_ACTION,
  payload: criteria,
})

export const setSortDirection = (direction: "Ascending" | "Descending"): IReducerAction => ({
  type: SET_SORT_DIRECTION_ACTION,
  payload: direction,
})

export const toggleSortDirection = () : IReducerAction => ({ type: TOGGLE_SORT_DIRECTION_ACTION });

export const setFilterCriteria = (filterCriteria: IFilterCriteria): IReducerAction => ({
  type: SET_FILTER_CRITERIA_ACTION,
  payload: filterCriteria,
})

// -> Reducer
// export const reducer = (
//   state: IEmbeddableResourceBrowserState,
//   action: IReducerAction
// ): IEmbeddableResourceBrowserState => {
//   const stateCopy = cloneDeep(state);
//   const { resources, history } = stateCopy;
//   // let targetDirectory;

//   switch(action.type) {
//     case SET_DISPLAY_MODE_ACTION:
//       return {
//         ...state,
//         displayMode: action.payload,
//       }
//     case SET_RESOURCE_BROWSER_WIDTH_ACTION:
//       return {
//         ...state,
//         resourceBrowserWidth: action.payload,
//       }
//     case NAVIGATE_TO_DIRECTORY_ACTION:
//       const targetID = action.payload;
      
//       const targetNavDirectory = findResourceByID(targetID, resources);
//       if (targetNavDirectory) stateCopy.currentResourceSubTree = targetNavDirectory;

//       history.navigateToDirectory(targetID);

//       return { ...stateCopy };
//     case NAVIGATE_FORWARD_ACTION:
//       let targetForwardDirectory;
//       const targetForwardDirectoryID = history.navigateForward();

//       if (targetForwardDirectoryID) {
//         targetForwardDirectory = findResourceByID(targetForwardDirectoryID, resources);
//         if (targetForwardDirectory) stateCopy.currentResourceSubTree = targetForwardDirectory;
//       }
      
//       return { ...stateCopy };
//     case NAVIGATE_BACKWARD_ACTION:
//       let targetBackwardDirectory;
//       const targetBackwardDirectoryID = history.navigateBackward();

//       if (targetBackwardDirectoryID) {
//         targetBackwardDirectory = findResourceByID(targetBackwardDirectoryID, resources);
//         if (targetBackwardDirectory) stateCopy.currentResourceSubTree = targetBackwardDirectory;
//       }

//       return { ...stateCopy };
//     default: throw new Error('This action type does not exist for the resource browser.');
//   }
// }
export const reducer = (
  state: IEmbeddableResourceBrowserState,
  action: IReducerAction
): IEmbeddableResourceBrowserState => {
  const stateCopy = cloneDeep(state);
  let { resources, currentResourceSubTree, history, currentPosition } = stateCopy;
  const furthestForwardHistoryPosition = history.length - 1;
  const furthestBackHistoryPosition = 0;
  // console.log('Resource Browser State Reducer: TopBar: history -> ', history);
  // console.log('Resource Browser State Reducer: TopBar: current position -> ', currentPosition);
  // console.log('Resource Browser State Reducer: TopBar: furthest forward position -> ', furthestForwardHistoryPosition);

  switch(action.type) {
    case SET_DISPLAY_MODE_ACTION:
      return {
        ...state,
        displayMode: action.payload,
      }
    case SET_RESOURCE_BROWSER_WIDTH_ACTION:
      return {
        ...state,
        resourceBrowserWidth: action.payload,
      }
    case NAVIGATE_TO_DIRECTORY_ACTION:
      const targetID = action.payload;
      
      const targetNavDirectory = findResourceByID(targetID, resources);
      // console.log('Browser reducer: targetNavDirectory -> ', targetNavDirectory);
      if (targetNavDirectory) currentResourceSubTree = targetNavDirectory;

      // - 1. If the current position is smaller than (history.length - 1) (furthest forward point in history), then the
      //      user has stepped backwards to some degree in the the history. Slice those elements
      //      off the deep copy of the history.
      if (currentPosition < furthestForwardHistoryPosition) {
        // console.log('Resource Browser State Reducer: Navigating from some point back in the history');
        // console.log('history pre slice -> ', history);
        history = history.splice(0, (currentPosition + 1));
        // console.log('history post slice -> ', history);
      }
      // - 2. Push the id of the new directory being navigated to onto the history array.
      history.push(targetID);
      // - 3. Set current position to largest index in the array, AKA the new most current position.
      currentPosition = history.length - 1;

      return {
        ...stateCopy,
        currentResourceSubTree,
        history,
        currentPosition,
      };
    case NAVIGATE_FORWARD_ACTION:
      let targetForwardDirectory, targetForwardDirectoryID;

      // -> Fully forward in history.
      if (currentPosition === furthestForwardHistoryPosition) return { ...stateCopy };
      currentPosition++;

      targetForwardDirectoryID = history[currentPosition];
      targetForwardDirectory = findResourceByID(targetForwardDirectoryID, resources);
      if (targetForwardDirectory) currentResourceSubTree = targetForwardDirectory;
      
      return {
        ...stateCopy,
        currentResourceSubTree,
        history,
        currentPosition
      };
    case NAVIGATE_BACKWARD_ACTION:
      let targetBackwardDirectoryID, targetBackwardDirectory;

      // -> Fully backward in history.
      if (currentPosition === furthestBackHistoryPosition) return { ...stateCopy };
      currentPosition--;

      // -> Resource browser uses this ID to navigate backward by a directory
      targetBackwardDirectoryID =  history[currentPosition];
      targetBackwardDirectory = findResourceByID(targetBackwardDirectoryID, resources);
      if (targetBackwardDirectory) currentResourceSubTree = targetBackwardDirectory;

      return {
        ...stateCopy,
        currentResourceSubTree,
        history,
        currentPosition,
      };
    case SET_SORT_CRITERIA_ACTION:
      console.log('[EmbeddableResourceBrowser]: state reducer: Set Sort Criteria Action triggered');
      return stateCopy;
    case SET_SORT_DIRECTION_ACTION:
      console.log('[EmbeddableResourceBrowser]: state reducer: Set Sort Direction Action triggered');
      return stateCopy;
    case TOGGLE_SORT_DIRECTION_ACTION:
      console.log('[EmbeddableResourceBrowser]: state reducer: Toggle Sort Direction Action triggered');
      return stateCopy;
    case SET_FILTER_CRITERIA_ACTION:
      console.log('[EmbeddableResourceBrowser]: state reducer: Set Filter Criteria Action triggered');
      return stateCopy;
    default: throw new Error('This action type does not exist for the resource browser.');
  }
}

// const SET_DISPLAY_MODE_ACTION = "SWITCH_DISPLAY_MODE_ACTION";
// const SET_RESOURCE_BROWSER_WIDTH_ACTION = "SET_RESOURCE_BROWSER_WIDTH_ACTION";
// const NAVIGATE_TO_DIRECTORY_ACTION = "NAVIGATE_TO_DIRECTORY_ACTION";
// const NAVIGATE_FORWARD_ACTION = "NAVIGATE_FORWARD_ACTION";
// const NAVIGATE_BACKWARD_ACTION = "NAVIGATE_BACKWARD_ACTION";
// const SET_SORT_CRITERIA_ACTION = "SET_SORT_CRITERIA_ACTION";
// const SET_SORT_DIRECTION_ACTION = "SET_SORT_DIRECTION_ACTION";
// const TOGGLE_SORT_DIRECTION_ACTION = "TOGGLE_SORT_DIRECTION_ACTION";
// const SET_FILTER_CRITERIA_ACTION = "SET_FILTER_CRITERIA_ACTION";
