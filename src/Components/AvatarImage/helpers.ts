import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { css } from 'aphrodite';
import { ROUND, ROUNDED, ORTHOGONAL } from '../../constants';

// - TODO: -> Find a way to use string geometry constants for avatar geometry
export interface IAvatarImageProps {
  size?: string | number;
  backgroundColor?: string;
  border?: string;
  avatarURL?: string;
  name1?: string;
  name2?: string;
  avatarGeometry?: 'orthogonal' | 'rounded' | 'round';
  borderWidth?: string | number;
  avatarTextSize?: number | string;
  avatarTextFont?: string;
  // - TODO: -> Figure out how to strongly type onClicks
  // onClick: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  clickable?: boolean;
  onClick?: any;
  customCradleStyles?: any;
  customCradleHoverStyles?: any;
  customTextStyles?: any;
}

// -> If no avatar URL is provided and no first or last name are provide,
//    these two values serve as placeholders of last resort.
// - TODO: -> Internationalize these placeholders for other languages.
const PLACEHOLDER_FIRST_NAME = "No";
const PLACEHOLDER_LAST_NAME = "Name";

export const calibrateComponent = (props: IAvatarImageProps, themeInfo: ThemeInfo, styles: any): any => {
  const {
    avatarCradle, avatarImg, customCradleStyles, avatarInitialsText, customTextStyles
  } = styles;
  const { avatarCradleGeometryStyle, avatarImgGeometryStyle } = determineAvatarGeometryStyles(props, styles);

  const avatarCradleStylechain = css(avatarCradle, avatarCradleGeometryStyle, customCradleStyles);
  const avatarImgStylechain = css(avatarImg, avatarImgGeometryStyle);
  const avatarInitialsStylechain = css(avatarInitialsText, customTextStyles);

  return { avatarCradleStylechain, avatarImgStylechain, avatarInitialsStylechain };
}

export const generateInitials = (name1?: string, name2?: string): string => {
  let initials = '';

  // -> Neither first nor last names are provided
  if ((!name1) && (!name2)) {
    name1 = PLACEHOLDER_FIRST_NAME;
    name2 = PLACEHOLDER_LAST_NAME;

    const firstInitial = name1.charAt(0).toUpperCase();
    const lastInitial = name2.charAt(0).toUpperCase();

    initials = `${firstInitial}${lastInitial}`;
  }
      
  // -> Only first name is provided
  else if (name1 && (!name2)) {
    const initial = name1.charAt(0).toUpperCase();
    initials = initial;
  }

  // -> Only last name is provided
  else if ((!name1) && name2) {
    const initial = name2.charAt(0).toUpperCase();
    initials = initial;
  }

  return initials;
}

const determineAvatarGeometryStyles = (props: IAvatarImageProps, styles: any): any => {
  const { avatarGeometry } = props;
  const {
    avatarCradleRounded, avatarCradleRound,
    avatarImgRounded, avatarImgRound
  } = styles;

  let avatarCradleGeometryStyle = null;
  let avatarImgGeometryStyle = null;

  switch (avatarGeometry) {
    case ORTHOGONAL: break;
    case ROUNDED:
      avatarCradleGeometryStyle = avatarCradleRounded;
      avatarImgGeometryStyle = avatarImgRounded;
      break;
    case ROUND:
      avatarCradleGeometryStyle = avatarCradleRound;
      avatarImgGeometryStyle = avatarImgRound;
      break;
    default: break;
  }

  return { avatarCradleGeometryStyle, avatarImgGeometryStyle };
}