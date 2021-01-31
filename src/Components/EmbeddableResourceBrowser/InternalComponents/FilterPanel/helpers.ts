import { IReducerAction, IFilterCriteria } from '../../stateManagement';
import { IDropdownItem } from '../../../Dropdown/stateManagement';
// import { uuid } from 'uuid';

export interface IFilterPanelProps {
  setFilterCriteria(filterCriteria: IFilterCriteria): IReducerAction;
  dispatch: any;
  currentFilterCriteria: IFilterCriteria;
}

// -> Map available filter criteria options into a data shape that works as options
//    for the selection dropdown.
export const generateFilterCriteriaDropdownOptions = (
  availableFilterCriteria: string[]
): IDropdownItem[] => {
  let filterCriteriaDropdownOptions: IDropdownItem[] = [];

  availableFilterCriteria.map((filterCriteria: string, index: number) => {
    // - TODO: -> Generate UUID dynamically here.
    const filterCriteriaDropdownOption: IDropdownItem = {
      id: index.toString(),
      label: filterCriteria,
    };

    filterCriteriaDropdownOptions.push(filterCriteriaDropdownOption);
  });

  return filterCriteriaDropdownOptions;
}
