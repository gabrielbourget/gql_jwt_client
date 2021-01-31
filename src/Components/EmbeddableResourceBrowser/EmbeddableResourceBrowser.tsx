// -> Beyond Codebase
import React, { useContext, useReducer } from 'react';
import { css } from 'aphrodite';
import Measure from 'react-measure';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LIST, GRID } from '../../constants';
// import { ResourceBrowserHistory } from '../../DataStructures/resourceBrowserHistory';
// -> Within Component,
import TopBar from './InternalComponents/TopBar/TopBar';
import ListResourceBrowser from './InternalComponents/ListResourceBrowser/ListResourceBrowser';
import GridResourceBrowser from './InternalComponents/GridResourceBrowser/GridResourceBrowser';
import { styleGen } from './EmbeddableResourceBrowserStyles';
import { IEmbeddableResourceBrowserProps } from './helpers';
import {
  reducer, navigateForward, navigateBackward,
  navigateToDirectory, setResourceBrowserWidth, setDisplayMode,
  setSortCriteria, toggleSortDirection, IEmbeddableResourceBrowserState,
  setFilterCriteria
} from './stateManagement';

const EmbeddableResourceBrowser: React.FC<IEmbeddableResourceBrowserProps> = (props) => {
  const { resources, navigateToFullSizedResourceBrowser, title } = props;

  // - TODO: -> Refer to some user preference on display modes if it is present on
  //            their profile rather than hardcoding an initial setting to the component.
  // const initialResourceBrowserState: IEmbeddableResourceBrowserState = {
  //   displayMode: GRID,
  //   resourceBrowserWidth: -1,
  //   history: new ResourceBrowserHistory(resources.id),
  //   resources: resources,
  //   currentResourceSubTree: resources, // -> Initialize entry point into browser as top of the resource tree.
  // }
  const initialResourceBrowserState: IEmbeddableResourceBrowserState = {
    displayMode: LIST,
    resourceBrowserWidth: -1,
    history: [resources.id],
    currentPosition: 0,
    resources: resources,
    currentSortCriteria: 'None',
    currentSortDirection: "Ascending",
    currentFilterCriteria: {
      criteria: "None",
      criteriaArgument: undefined,
    },
    currentResourceSubTree: resources,
  }
  
  const [ state, dispatch ] = useReducer(reducer, initialResourceBrowserState);
  const {
    displayMode, resourceBrowserWidth, currentResourceSubTree,
    history, currentPosition, currentSortCriteria, currentSortDirection,
    currentFilterCriteria
  } = state;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {
    componentCradle, resourcesContentCradle, noContentFallbackText
  } = styleGen(props, themeInfo);

  const navigateToResourceLink = (link?: string) => {
    if (link) window.open(link, '_blank');
    // - TODO: -> Internationalize Text
    else alert('No link provided for this resource.');
  }

  return (
    <Measure
      bounds
      onResize={(contentRect: any) => {
        // console.log('EmbeddableResourceBrowser: component dimensions -> ', { height: contentRect.bounds.height, width: contentRect.bounds.width });
        dispatch(setResourceBrowserWidth(contentRect.bounds.width));
      }}
    >
      {
        ({ measureRef }) => (
          <div className={css(componentCradle)} ref={measureRef}>
            <TopBar
              setDisplayMode={setDisplayMode}
              navigateToFullSizedResourceBrowser={navigateToFullSizedResourceBrowser}
              displayMode={displayMode}
              title={title}
              currentSortCriteria={currentSortCriteria}
              currentSortDirection={currentSortDirection}
              currentFilterCriteria={currentFilterCriteria}
              navigateForward={navigateForward}
              navigateBackward={navigateBackward}
              setSortCriteria={setSortCriteria}
              setFilterCriteria={setFilterCriteria}
              toggleSortDirection={toggleSortDirection}
              dispatch={dispatch}
            />
            <div className={css(resourcesContentCradle)}>
              {
                (resources.children && resources.children.length > 0) ? (
                  <>
                    {
                      (displayMode === LIST) ? (
                        <ListResourceBrowser
                          resources={currentResourceSubTree}
                          onResourceClick={navigateToResourceLink}
                          navigateForward={navigateForward}
                          navigateBackward={navigateBackward}
                          navigateToDirectory={navigateToDirectory}
                          history={history}
                          currentPosition={currentPosition}
                          dispatch={dispatch}
                        />
                      ) : (
                        <GridResourceBrowser
                          resources={currentResourceSubTree}
                          onResourceClick={navigateToResourceLink}
                          resourceBrowserWidth={resourceBrowserWidth}
                          navigateForward={navigateForward}
                          navigateBackward={navigateBackward}
                          navigateToDirectory={navigateToDirectory}
                          history={history}
                          currentPosition={currentPosition}
                          dispatch={dispatch}
                        />
                      )
                    }
                  </>
                ) : (
                  // - TODO: -> Internationalize Text
                  <p className={css(noContentFallbackText)}>
                    No resources were provided/exist.
                  </p>
                )
              }
            </div>
          </div>
        )
      }
    </Measure>
  );
}

export default EmbeddableResourceBrowser;
