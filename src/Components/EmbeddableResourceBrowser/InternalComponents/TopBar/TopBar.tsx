// -> Beyond Codebase
import React, { useContext, useState } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import Fade from '../../../AnimationUtilities/TransitionWrappers/Fade/Fade';
import IconButton from '../../../Button/Variants/IconButton/IconButton';
import Dropdown from '../../../Dropdown/Dropdown';
import ExpandIcon from '../../../VisualUtilities/IconPresets/ExpandIcon';
import FilterIcon from '../../../VisualUtilities/IconPresets/FilterIcon';
import SortIcon from '../../../VisualUtilities/IconPresets/SortIcon';
import ContextMenuHorizontalIcon from '../../../VisualUtilities/IconPresets/ContextMenuHorizontalIcon';
import { GridIcon, ListIcon, XIcon } from '../../../VisualUtilities/IconPresets';
import { UIContext, ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { underConstructionAlert } from '../../../../helpers';
import { GRID, LIST, ROUNDED } from '../../../../constants';
import SortPanel from '../SortPanel/SortPanel';
import FilterPanel from '../FilterPanel/FilterPanel';
// -> Within Component
import { styleGen } from './TopBarStyles';
import { ITopBarProps } from './helpers';

const TopBar: React.FC<ITopBarProps> = (props) => {
  const [ additionalOptionsOpen, setAdditionalOptionsStatus ] = useState(false);
  const {
    title, navigateToFullSizedResourceBrowser, dispatch, displayMode,
    setDisplayMode, setSortCriteria, toggleSortDirection, currentSortCriteria,
    currentSortDirection, currentFilterCriteria, setFilterCriteria
  } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {
    sectionTitle, titleBarCradle, titleBarButtonRow,
    additionalOptionsButtonRow, additionalOptionsButtonRowOpen
  } = styleGen(props, themeInfo);

  // - TODO: -> Internationalize text
  const computedBrowserTitle = title ? title : 'Resources';
  const computedAdditionalOptionsButtonIcon = additionalOptionsOpen ? (
    <XIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />
  ) : (
    <ContextMenuHorizontalIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />
  );
  const isThereARouteToAFullSizedBrowser = (navigateToFullSizedResourceBrowser) ? true : false;
  const additionalOptionsButtonRowActiveStyle = additionalOptionsOpen ? additionalOptionsButtonRowOpen : undefined;
  const additionalOptionsButtonRowStylechain = css(additionalOptionsButtonRow, additionalOptionsButtonRowActiveStyle);
  return (
    <div className={css(titleBarCradle)}>
      <p className={css(sectionTitle)}>{computedBrowserTitle}</p>
      <div className={css(titleBarButtonRow)}>
        <div className={additionalOptionsButtonRowStylechain}>
          {
            additionalOptionsOpen && (
              <Fade inStatus={additionalOptionsOpen}>
                <>
                  {/* SORT PANEL */}
                  <Dropdown
                    onSelectItem={() => {}}
                    closeDropCradleOnSelect
                    geometry={ROUNDED}
                    dropCradleGap={1}
                    baseCradleBorder="none"
                    customBaseCradleStyles={{
                      padding: 0,
                      height: themeInfo.styles.standardIconSize,
                      width: themeInfo.styles.standardIconSize,
                      backgroundColor: 'transparent'
                    }}
                    customDropdownCradleStyles={{
                      height: themeInfo.styles.standardIconSize,
                      width: themeInfo.styles.standardIconSize,
                    }}
                    CustomBaseCradleComponent={
                      <IconButton
                        icon={<SortIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />}
                        onClick={() => {}}
                      />
                    }
                    CustomDropdownComponent={
                      <SortPanel
                        dispatch={dispatch}
                        setSortCriteria={setSortCriteria}
                        toggleSortDirection={toggleSortDirection}
                        currentSortCriteria={currentSortCriteria}
                        currentSortDirection={currentSortDirection}
                      />
                    }
                  />

                  <div style={{ marginRight: themeInfo.distance.two }}></div>

                  {/* FILTER PANEL */}
                  <Dropdown
                    onSelectItem={() => {}}
                    closeDropCradleOnSelect
                    geometry={ROUNDED}
                    dropCradleGap={1}
                    baseCradleBorder="none"
                    customBaseCradleStyles={{
                      padding: 0,
                      height: themeInfo.styles.standardIconSize,
                      width: themeInfo.styles.standardIconSize,
                      backgroundColor: 'transparent'
                    }}
                    customDropdownCradleStyles={{
                      height: themeInfo.styles.standardIconSize,
                      width: themeInfo.styles.standardIconSize,
                    }}
                    CustomBaseCradleComponent={
                      <IconButton
                        icon={<FilterIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />}
                        onClick={() => {}}
                      />
                    }
                    CustomDropdownComponent={
                      <FilterPanel
                        dispatch={dispatch}
                        setFilterCriteria={setFilterCriteria}
                        currentFilterCriteria={currentFilterCriteria}
                      />
                    }
                  />

                  <div style={{ marginRight: themeInfo.distance.two }}></div>
                </>
              </Fade>
            )
          }
          
          <IconButton
            icon={computedAdditionalOptionsButtonIcon}
            onClick={() => setAdditionalOptionsStatus(!additionalOptionsOpen)}
          />
        </div>
        
        <div style={{ marginRight: themeInfo.distance.one }}></div>

        {/* GRID MODE */}
        <IconButton
          icon={<GridIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize - 5} />}
          onClick={() => {
            if (displayMode === GRID) return;
            dispatch(setDisplayMode(GRID));
          }}
        />

        <div style={{ marginRight: themeInfo.distance.two }}></div>

        {/* LIST MODE */}
        <IconButton
          icon={<ListIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize - 5} />}
          onClick={() => {
            if (displayMode === LIST) return;
            dispatch(setDisplayMode(LIST));
          }}
        />
        {
          (isThereARouteToAFullSizedBrowser) && (
            <>
              <div style={{ marginRight: themeInfo.distance.two }}></div>

              {/* FULL SIZED BROWSER */}
              <IconButton
                // - TODO: -> Change this icon to more of an 'engage fullscreen' icon
                icon={<ExpandIcon color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize - 2.5} />}
                onClick={() => underConstructionAlert()}
              />
            </>
          )
        }
      </div>
    </div>
  );
}

export default TopBar;
