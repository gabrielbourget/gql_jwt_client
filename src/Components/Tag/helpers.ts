import { css } from 'aphrodite';
import { ORTHOGONAL, ROUNDED, ROUND } from '../../constants';

// - TODO: -> Weakness here because I had to hard code string literals for
//            the tag cradle geometry instead of using the string constants.
export interface ITagProps {
  labelText: string;
  id?: string;
  activeColor?: string;
  activeTextColor?: string;
  activeBorder?: string;
  inactiveColor?: string;
  inactiveTextColor?: string;
  inactiveBorder?: string;
  tagGeometry?: 'orthogonal' | 'rounded' | 'round';
  hoverCursor?: string;
  backgroundColorTransition?: string;
  toggleable?: boolean;
  removeable?: boolean;
  removeIconSize?: number;
  active?: boolean; // -> Tag can be initialized to a value externally.
  removeTag?: any;
  onClick?(active?: boolean, labelText?: string, id?: string): boolean;
  customCradleStyles?: any;
  customTextStyles?: any;
}

const determineTagGeometryStyle = (props: ITagProps, styles: any) => {
  let { tagGeometry } = props;
  const{ tagCradleRounded, tagCradleRound } = styles;
  let tagGeometryStyle;

  switch(tagGeometry) {
    case ORTHOGONAL: break;
    case ROUNDED:
      tagGeometryStyle = tagCradleRounded;
      break;
    case ROUND:
      tagGeometryStyle = tagCradleRound;
      break;
    default: break;
  }

  return tagGeometryStyle;
}

export const calibrateComponent = (props: ITagProps, styles: any, tagActive?: boolean) => {
  const {
    tagCradleActive, tagCradleInactive, tagTextActive, tagTextInactive,
    tagCradle, customCradleStyles, tagText, customTextStyles
  } = styles;
  const tagGeometryStyle = determineTagGeometryStyle(props, styles);
  const tagStatusStyle = tagActive ? tagCradleActive : tagCradleInactive;
  const tagTextStatusStyle = tagActive ? tagTextActive : tagTextInactive;

  const tagCradleStylechain = css(tagCradle, tagStatusStyle, tagGeometryStyle, customCradleStyles);
  const tagTextStylechain = css(tagText, tagTextStatusStyle, customTextStyles);

  return { tagCradleStylechain, tagTextStylechain };
}