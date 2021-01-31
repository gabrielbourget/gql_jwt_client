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
    }
  };
};
