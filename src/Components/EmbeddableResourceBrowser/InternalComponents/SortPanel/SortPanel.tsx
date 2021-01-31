// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
import Switch from 'react-switch';
// -> Within Codebase
import Dropdown from '../../../Dropdown/Dropdown';
import { ThemeInfo, UIContext } from '../../../UI_InfoProvider/UI_InfoProvider';
import { availableSortCriteria, availableSortDirections } from '../../helpers';
import { IDropdownItem } from '../../../Dropdown/stateManagement';
// -> Within Component
import { styleGen } from './SortPanelStyles';
import { ISortPanelProps, generateSortCriteriaDropdownOptions } from './helpers';

const SortPanel: React.FC<ISortPanelProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {
    setSortCriteria, toggleSortDirection, dispatch, currentSortDirection, currentSortCriteria
  } = props;
  const { panelCradle, sortCriteriaLabel } = styleGen(themeInfo);

  const onSetSortCriteria = (criteria: string) => {
    dispatch(setSortCriteria(criteria));
  };

  const sortCriteriaDropdownOptions: IDropdownItem[] =
    generateSortCriteriaDropdownOptions(availableSortCriteria);

  return (
    <div className={css(panelCradle)}>
      {/* - TODO: -> Internationalize Text */}
      <p className={css(sortCriteriaLabel)}>Sort Criteria</p>
      <div style={{ marginTop: themeInfo.distance.two }}></div>
      <Dropdown
        baseCradleBorder="none"
        onSelectItem={onSetSortCriteria}
        items={sortCriteriaDropdownOptions}
        baseItem={sortCriteriaDropdownOptions[0]}
      />
    </div>
  );
}

export default SortPanel;
