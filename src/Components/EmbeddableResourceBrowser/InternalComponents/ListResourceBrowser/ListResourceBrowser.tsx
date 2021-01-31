// -> Beyond Codebase
import React, { useContext, useRef, useLayoutEffect, useState } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import LineSegment from '../../../VisualUtilities/LineSegment/LineSegment';
import { UIContext, ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { mapResourceTypeToResourceIcon } from '../../../../helpers';
import { ROUNDED, HORIZONTAL, DIRECTORY } from '../../../../constants';
import { Resource } from '../../../../Types';
// import { ResourceBrowserHistory } from '../../../../DataStructures';
// -> Within Component
import ListHeader from './InternalComponents/ListHeader/ListHeader';
import ResourceListItem from './InternalComponents/ResourceListItem/ResourceListItem';
import { styleGen } from './ListResourceBrowserStyles';

export interface IListResourceBrowserProps {
  resources: Resource;
  onResourceClick(link?: string): Window | void | null;
  navigateForward: any;
  navigateBackward: any;
  navigateToDirectory: any;
  history: string[],
  currentPosition: number,
  dispatch: any;
}

const ListResourcesBrowser: React.FC<IListResourceBrowserProps> = (props) => {
  const browserRef = useRef<HTMLDivElement>(null);
  const [ browserWidth, setBrowserWidth ] = useState(0);
  const {
    resources, onResourceClick, dispatch, navigateForward,
    navigateBackward, navigateToDirectory, history, currentPosition
  } = props;
  const { themeInfo }: { themeInfo: ThemeInfo} = useContext(UIContext);
  const { 
    browserCradle, browserContentCradle, noContentFallbackText
  } = styleGen(props, themeInfo);

  const resourceCount = resources.children ? resources.children.length : 0;

  useLayoutEffect(() => {
    if (browserRef.current?.clientWidth) setBrowserWidth(browserRef.current.clientWidth);
    console.log('browser width -> ', browserRef.current?.clientWidth);
  }, [])

  return (
    <div className={css(browserCradle)} ref={browserRef}>
      <ListHeader
        dispatch={dispatch}
        navigateBackward={navigateBackward}
        navigateForward={navigateForward}
        history={history}
        currentPosition={currentPosition}
      />
      <div className={css(browserContentCradle)}>
        {
          (resources.children && (resources.children.length > 0)) ? (
            <>
              {
                resources.children && resources.children.map((resource: Resource, index: number) => {
                  const { id, name, types, link } = resource;
                  const icon = mapResourceTypeToResourceIcon(types);
                  const computedOnClick = (types && types.includes(DIRECTORY))
                    ? () => dispatch(navigateToDirectory(id)) : () => onResourceClick(link);

                  return (
                    <div key={id}>
                      <ResourceListItem
                        icon={icon}
                        name={name}
                        types={types}
                        innerCradleGeometry={ROUNDED}
                        customInnerCradleStyles={{
                          transition: themeInfo.transitions.bgColorTransition,
                        }}
                        customInnerCradleHoverStyles={{
                          backgroundColor: themeInfo.palette.grey1
                        }}
                        onClick={computedOnClick}
                      />
                      {
                        (index <= (resourceCount - 1)) ? (
                          <div style={{ height: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <LineSegment
                              direction={HORIZONTAL}
                              // - TODO: -> Figure this out. g
                              width={browserWidth - 30}
                              size={1}
                              color={themeInfo.palette.grey1}
                            />
                          </div>
                        ) : null
                      }
                    </div>
                  );
                })
              }
            </>
          ) : (
            // - TODO: -> Internationalize text
            <p className={css(noContentFallbackText)}>This directory contains no resources.</p>
          )
        }
      </div>
    </div>
  );
}

export default ListResourcesBrowser;
