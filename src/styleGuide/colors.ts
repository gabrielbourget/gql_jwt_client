// -------------- //
// - INTERFACES - //
// -------------- //

interface IPrimaryColor {
  primary_p2: string;
  primary_p1: string;
  primary: string;
  primary_m1: string;
  primary_m2: string;
};

interface ISecondaryColor {
  secondary_p2: string;
  secondary_p1: string;
  secondary: string;
  secondary_m1: string;
  secondary_m2: string;
};

interface ITertiaryColor {
  tertiary_p2: string;
  tertiary_p1: string;
  tertiary: string;
  tertiary_m1: string;
  tertiary_m2: string;
};

interface IQuaternaryColor {
  quaternary_p2: string;
  quaternary_p1: string;
  quaternary: string;
  quaternary_m1: string;
  quaternary_m2: string;
};

interface IQuintenaryColor {
  quintenary_p2: string;
  quintenary_p1: string;
  quintenary: string;
  quintenary_m1: string;
  quintenary_m2: string;
};

interface IGrayScale {
  white: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  grey8: string;
  black: string;
};

// interface IPalette {
//   grayScale: IGrayScale,
//   errorStatus?: string;
//   successStatus?: string;
//   primaryColor?: IPrimaryColor,
//   secondaryColor?: ISecondaryColor,
//   tertiaryColor?: ITertiaryColor,
//   quaternaryColor?: IQuaternaryColor,
//   quintenaryColor?: IQuintenaryColor,
// }

// ----------------- //
// - VARIABLE SETS - //
// ----------------- //

export const primaryColor: IPrimaryColor = {
  primary_p2: '#F4A79B',
  primary_p1: '#F08A7A',
  primary: '#ED6D59',
  primary_m1: '#D56250',
  primary_m2: '#BD5747'
};

export const secondaryColor: ISecondaryColor = {
  secondary_p2: '#87779A',
  secondary_p1: '#5F4A79',
  secondary: '#371D58',
  secondary_m1: '#311A4F',
  secondary_m2: '#2C1746'
};

export const tertiaryColor: ITertiaryColor = {
  tertiary_p2: '#BEE2C7',
  tertiary_p1: '#A9D8B4',
  tertiary: '#94CFA2',
  tertiary_m1: '#85BA91',
  tertiary_m2: '#76A581'
};

export const quaternaryColor: IQuaternaryColor = {
  quaternary_p2: '#F3767B',
  quaternary_p1: '#EF494F',
  quaternary: '#EC1C24',
  quaternary_m1: '#D4191F',
  quaternary_m2: '#BC161C'
};

// export const quintenaryColor: IQuintenaryColor = {
//   quintenary_p2: '#FFFFFF',
//   quintenary_p1: '#FFFFFF',
//   quintenary: '#EFF6F9',
//   quintenary_m1: '#D6DDE0',
//   quintenary_m2: '#BDC4C7'
// };

export const grayScale: IGrayScale = {
  white: 'white',
  grey1: '#F2F2F2',
  grey2: '#C6C6C6',
  grey3: '#9E9E9E',
  grey4: '#878787',
  grey5: '#707070',
  grey6: '#474747',
  grey7: '#3D3D3D',
  grey8: '#232323',
  black: 'black'
};

export const otherColors: any = {
  TWITTER_BLUE: '#1DA1F2',
  FACEBOOK_BLUE: '#4267B2',
}


export const palette = {
  ...grayScale,
  ...otherColors,
  errorStatus: '#B73434',
  successStatus: '#319606',
  ...primaryColor,
  ...secondaryColor,
  ...tertiaryColor,
  ...quaternaryColor,
};