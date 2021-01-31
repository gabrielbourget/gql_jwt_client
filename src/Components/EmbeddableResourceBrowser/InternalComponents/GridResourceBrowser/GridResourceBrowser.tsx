// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { Resource } from '../../../../Types';
import { mapResourceTypeToResourceIcon } from '../../../../helpers';
import { DIRECTORY, ROUNDED } from '../../../../constants';
// -> Within Component
import TopBar from './InternalComponents/TopBar/TopBar';
import ResourceCard from './InternalComponents/ResourceCard/ResourceCard';
import { styleGen } from './GridResourceBrowserStyles';
import {
  SMALL_CARD_WIDTH, LARGE_CARD_WIDTH, RESOURCE_BROWSER_WIDTH_BREAKPOINT,
  SMALL_CARD_ICON_SIZE, LARGE_CARD_ICON_SIZE, IGridResourceBrowserProps
} from './helpers';

const GridResourceBrowser: React.FC<IGridResourceBrowserProps> = (props) => {
  const {
    resources, resourceBrowserWidth, onResourceClick,
    navigateBackward, navigateForward, dispatch,
    navigateToDirectory, history, currentPosition
  } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const computedCardWidth = (resourceBrowserWidth < RESOURCE_BROWSER_WIDTH_BREAKPOINT) ? SMALL_CARD_WIDTH : LARGE_CARD_WIDTH;
  const { 
    browserCradle, browserContentCradle, browserNoContentCradle, noContentFallbackText
  } = styleGen(props, themeInfo, computedCardWidth);

  return (
    <div className={css(browserCradle)}>
      <TopBar
        navigateBackward={navigateBackward}
        navigateForward={navigateForward}
        history={history}
        currentPosition={currentPosition}
        dispatch={dispatch}
      />
      {
        (resources.children && (resources.children.length > 0)) ? (
          <div className={css(browserContentCradle)}>
            {
              resources.children && resources.children.map((resource: Resource) => {
                const { id, name, types, link } = resource;
                const resourceIconSize = (resourceBrowserWidth < RESOURCE_BROWSER_WIDTH_BREAKPOINT)
                  ? SMALL_CARD_ICON_SIZE : LARGE_CARD_ICON_SIZE;
                const icon = mapResourceTypeToResourceIcon(types, resourceIconSize);
                const computedOnClick = (types && types.includes(DIRECTORY))
                  ? () => dispatch(navigateToDirectory(id)) : () => onResourceClick(link);

                return (
                  <ResourceCard
                    key={id}
                    id={id}
                    icon={icon}
                    types={types}
                    name={name}
                    cardGeometry={ROUNDED}
                    onClick={computedOnClick}
                    cardWidth={computedCardWidth}
                  />            
                );
              })
            }
          </div> 
        ) : (
          <div className={css(browserNoContentCradle)}>
            {/* - TODO: -> Internationalize Text */}
            <p className={css(noContentFallbackText)}>This directory contains no resources.</p>
          </div>
        )
      }  
    </div>
  );
}


export default GridResourceBrowser;
