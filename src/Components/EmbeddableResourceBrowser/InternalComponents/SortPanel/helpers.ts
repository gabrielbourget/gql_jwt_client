import { IReducerAction } from '../../stateManagement';
import { IDropdownItem } from '../../../Dropdown/stateManagement';
// import { uuid } from 'uuid';

export interface ISortPanelProps {
  setSortCriteria(criteria: string): IReducerAction;
  toggleSortDirection(): IReducerAction;
  dispatch: any;
  currentSortDirection: string;
  currentSortCriteria: string;
}

// -> Map available sort criteria options into a data shape that works as options
//    for the selection dropdown.
export const generateSortCriteriaDropdownOptions = (
  availableSortCriteria: string[]
): IDropdownItem[] => {
  let sortCriteriaDropdownOptions: IDropdownItem[] = [];

  availableSortCriteria.map((sortCriteria: string, index: number) => {
    // - TODO: -> Generate UUID dynamically here.
    const sortCriteriaDropdownOption: IDropdownItem = {
      id: index.toString(),
      label: sortCriteria
    };

    sortCriteriaDropdownOptions.push(sortCriteriaDropdownOption);
  });

  return sortCriteriaDropdownOptions;
}
