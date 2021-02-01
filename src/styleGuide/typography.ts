export const generateTypographyTable = (fonts: any, palette: any) => {
  const { primary, tertiary } = fonts;

  return {
    sectionTitle: {
      fontFamily: primary,
      fontWeight: 'bold',
      fontSize: '1.6rem',
      lineHeight: 1.0,
      textDecoration: 'underline',
    },
    noContentFallbackText: {
      ...tertiary.italic,
      fontSize: '1.2rem',
      color: palette.grey2,
      textAlign: 'center',
    },
    default: {
      fontFamily: primary,
      fontSize: '1.2rem',
      color: palette.black,
    },
    h1: {
      fontFamily: primary,
      fontSize: '2.4rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: primary,
      fontSize: '2.2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: primary,
      fontSize: '2.0rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: primary,
      fontSize: '1.8rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: primary,
      fontSize: '1.6rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: primary,
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    h7: {
      fontFamily: primary,
      fontSize: '1.2rem',
      fontWeight: 'bold',
    }
  };
};
