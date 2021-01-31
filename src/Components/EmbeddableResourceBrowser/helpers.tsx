// -> Beyond Codebase
import React from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import Tag from '../Tag/Tag';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GRID, LIST, ROUNDED, DIRECTORY } from '../../constants';
import { Resource } from '../../Types';
// import { ResourceBrowserHistory } from '../../DataStructures';

// -> Interfaces
export interface IEmbeddableResourceBrowserProps {
  resources: Resource;
  title?: string;
  navigateToFullSizedResourceBrowser?(): void;
}

// - TODO: -> Weakness with interface here because I had to use string literals instead of constants.
// export interface IEmbeddableResourceBrowserState {
//   displayMode: 'Grid' | 'List';
//   resourceBrowserWidth: number;
//   history: ResourceBrowserHistory;
//   resources: Resource;
//   currentResourceSubTree: Resource;
//   // path: string[]; // -> Array of IDs corresponding to directory path from root of resources passed into the component.
// }

export const renderResourceTypeTags = (styles: any, themeInfo: ThemeInfo, types?: string[], ) => {
  const { noContentFallbackText } = styles;
  const { palette } = themeInfo;

  return (types) ? (
    types.map((type: string, index: number) => {
      return (
        <Tag
          key={index}
          labelText={type.toUpperCase()}
          activeColor={palette.grey1}
          tagGeometry={ROUNDED}
          customCradleStyles={{ padding: themeInfo.distance.DISTANCE_COEFFICIENT * 0.75 }}
          customTextStyles={{ fontSize: '0.5rem', color: palette.black }}
        />
      );
    })
  ) : (
    // - TODO: -> Internationalize Text
    <p className={css(noContentFallbackText)}>No resource types provided</p>
  );
}

// -> SORT CRITERIA
export const SORT_CRITERIA__NONE = "None";
export const SORT_CRITERIA__NAME = "Name";
export const availableSortCriteria = [SORT_CRITERIA__NONE, SORT_CRITERIA__NAME];

// -> SORT DIRECTIONS
export const SORT_DIRECTION__ASCENDING = "Ascending"
export const SORT_DIRECTION__DESCENDING = "Descending"
export const availableSortDirections = [SORT_DIRECTION__ASCENDING, SORT_DIRECTION__DESCENDING];

// -> FILTER CRITERIA
export const FILTER_CRITERIA__NONE = "None";
export const FILTER_CRITERIA__NAME = "Name";
export const FILTER_CRITERIA__TYPE = "Type";
export const availableFilterCriteria = [
  FILTER_CRITERIA__NONE, FILTER_CRITERIA__NAME, FILTER_CRITERIA__TYPE
];


