// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import Dropdown from '../../../Dropdown/Dropdown';
import { ThemeInfo, UIContext } from '../../../UI_InfoProvider/UI_InfoProvider';
import { IFilterCriteria } from '../../stateManagement';
import { availableFilterCriteria } from '../../helpers';
import { IDropdownItem } from '../../../Dropdown/stateManagement';
// -> Within Component
import { styleGen } from './FilterPanelStyles';
import { IFilterPanelProps, generateFilterCriteriaDropdownOptions } from './helpers';

// - TODO: -> Intended functionality is that once a filter criteria is chosen and a
//            criteria argument has been provided, the browser should trigger filtering.
const FilterPanel: React.FC<IFilterPanelProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { setFilterCriteria, dispatch, currentFilterCriteria } = props;
  const { panelCradle, label } = styleGen(themeInfo);

  const onSetFilterCriteria = (filterCriteria: IFilterCriteria) => {
    // setFilterCriteria(filterCriteria);
  };

  const filterCriteriaDropdownOptions: IDropdownItem[] =
    generateFilterCriteriaDropdownOptions(availableFilterCriteria);

  return (
    <div className={css(panelCradle)}>
      {/* - TODO: -> Internationalize Text */}
      <p className={css(label)}>Filter Criteria</p>
      <div style={{ marginTop: themeInfo.distance.two }}></div>
      <Dropdown
        baseCradleBorder="none"
        onSelectItem={onSetFilterCriteria}
        items={filterCriteriaDropdownOptions}
        baseItem={filterCriteriaDropdownOptions[0]}
      />
      <div style={{ marginTop: themeInfo.distance.two }}></div>
      {/* - TODO: -> Input field here  */}
    </div>
  );
}

export default FilterPanel;
