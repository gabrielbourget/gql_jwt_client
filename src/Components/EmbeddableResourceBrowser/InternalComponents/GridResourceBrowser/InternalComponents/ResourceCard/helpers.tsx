import { ReactNode } from 'react';
import { css } from 'aphrodite';
import { ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { ORTHOGONAL, ROUNDED, ROUND } from '../../../../../../constants';

// - TODO: -> Weakness with card geometry type, had to use string literals, prefer to use string constants.
export interface IResourceCardProps {
  id?: string;
  key?: string; // -> Used in the context of being parts of lists. React uses this as metadata for rendering efficiency.
  icon: ReactNode;
  name?: string;
  types?: string[];
  onClick(): void;
  cardGeometry?: 'orthogonal' | 'rounded' | 'round';
  cardWidth: number;
  customCardCradleStyles?: any;
  customIconCradleStyles?: any;
  customTypesCradleStyles?: any;
  customFooterCradleStyles?: any;
  customFooterTextStyles?: any;
}

const determineCardCradleGeometry = (requestedGeometry: string = ORTHOGONAL, styles: any) => {
  let cardCradleStyle;
  const { cardCradleRounded, cardCradleRound } = styles;

  switch(requestedGeometry) {
    case ORTHOGONAL: break;
    case ROUNDED:
      cardCradleStyle = cardCradleRounded;
      break;
    case ROUND:
      cardCradleStyle = cardCradleRound;
      break;
    default: break;
  }

  return cardCradleStyle;
}

export const calibrateComponent = (
  props: IResourceCardProps,
  themeInfo: ThemeInfo,
  styles: any,
  hoverState: boolean
) => {
  const { cardGeometry } = props;
  const {
    cardCradle, iconCradle, typesCradle, footerCradle, footerText, footerHover,
    customCardCradleStyles, customIconCradleStyles, customTypesCradleStyles,
    customFooterCradleStyles, customFooterTextStyles
  } = styles;

  const cardCradleGeometryStyle = determineCardCradleGeometry(cardGeometry, styles);
  const footerHoverStyle = (hoverState === true) ? footerHover : undefined;

  const cardCradleStylechain = css(cardCradle, cardCradleGeometryStyle, customCardCradleStyles);
  const iconCradleStylechain = css(iconCradle, customIconCradleStyles);
  const typesCradleStylechain = css(typesCradle, customTypesCradleStyles);
  const footerCradleStylechain = css(footerCradle, footerHoverStyle, customFooterCradleStyles);
  const footerTextStylechain = css(footerText, customFooterTextStyles);

  return {
    cardCradleStylechain, iconCradleStylechain, typesCradleStylechain,
    footerCradleStylechain, footerTextStylechain
  };
}
