import { palette } from './colors';
import { distanceTable, DISTANCE_COEFFICIENT } from './distanceTable';
import { HKGrotesk, Overpass } from './fonts';

export const styleGuide: any = {
  palette: { ...palette },
  distance: {
    DISTANCE_COEFFICIENT,
    ...distanceTable
  },
  stackingIndexes: {
    navBar: 25,
    dropdown: 50,
    backdrop: 75,
    modal: 100,
  },
  borderRadii: {
    one: 4,
    two: 8,
    three: 12,
    four: 16
  },
  fonts: {
    primary: 'Helvetica, sans-serif',
    secondary: { ...HKGrotesk },
    tertiary: { ...Overpass }
  },
  shadows: {
    one: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    two: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    three: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    four: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    five: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    namedVariants: {
      nameOverflowResourceCard: "inset 0 -3px 3.5px rgba(0,0,0,0.2)",
      contentOverflowWorkingGroupCard: "inset 0 -10px 6.5px rgba(0,0,0,0.2)",
    }
  },
  gradients: {
    bgPrimaryToTransparentVertical: `linear-gradient(0deg, ${palette.primary_p2}, transparent)`,
  },
  transitions: {
    bgColorTransition: 'background-color 0.2s ease-in-out',
    colorTransition: 'color 0.2s ease-in-out',
    boxShadowTransition: 'box-shadow 0.45s ease-in-out',
  },
  styles: {
    disabledOpacity: 0.3,
    backdropOpacity: 0.6,
    standardIconSize: 20,
  }
};
