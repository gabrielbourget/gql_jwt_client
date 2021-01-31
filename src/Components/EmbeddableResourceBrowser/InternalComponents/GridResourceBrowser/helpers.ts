import { Resource } from '../../../../Types';
// import { ResourceBrowserHistory } from '../../../../DataStructures';

export const SMALL_CARD_WIDTH = 125;
export const LARGE_CARD_WIDTH = 175;
export const CARD_HEIGHT_TO_WIDTH_SCALE_COEFFICIENT = 1.15;
export const RESOURCE_BROWSER_WIDTH_BREAKPOINT = 500;
export const LARGE_CARD_ICON_SIZE = 45;
export const SMALL_CARD_ICON_SIZE = 30;

export interface IGridResourceBrowserProps {
  resources: Resource;
  onResourceClick(link?: string): Window | null | void;
  dispatch: any;
  navigateForward: any;
  navigateBackward: any;
  navigateToDirectory: any;
  history: string[];
  currentPosition: number,
  resourceBrowserWidth: number;
}
