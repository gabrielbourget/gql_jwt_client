import { IReducerAction, IFilterCriteria } from '../../stateManagement';

export interface ITopBarProps {
  title?: string;
  navigateToFullSizedResourceBrowser?(): void;
  setDisplayMode: any;
  displayMode: string;
  currentSortCriteria: string;
  currentSortDirection: string;
  currentFilterCriteria: IFilterCriteria;
  navigateForward(): IReducerAction;
  navigateBackward(): IReducerAction;
  setSortCriteria(criteria: string): IReducerAction;
  toggleSortDirection(): IReducerAction;
  setFilterCriteria(filterCriteria: IFilterCriteria): IReducerAction;
  dispatch: any;
}
