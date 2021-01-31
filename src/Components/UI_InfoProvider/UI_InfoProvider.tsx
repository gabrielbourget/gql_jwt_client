import React from 'react';
import { styleGuide } from '../../styleGuide/styleGuide';
import { generateTypographyTable } from '../../styleGuide/typography';

enum themes {
  LIGHT = "light",
  DARK = "dark",
}

export type UIContext = {
  navBarVisible: boolean;
  backdropVisible: boolean;
  toggleTheme(): void;
  toggleBackdrop(): void;
  themeInfo: ThemeInfo;
}

// - TODO: -> Strongly type the containing elements of the themeInfo
export type ThemeInfo = {
  theme: themes;
  palette: any;
  fonts: any;
  typography: any;
  distance: any;
  stackingIndexes: any;
  borderRadii: any;
  shadows: any;
  gradients: any;
  transitions: any;
  styles: any;
}

const initContextValue: UIContext = {
  navBarVisible: true,
  backdropVisible: false,
  toggleTheme: () => {},
  toggleBackdrop: () => {},
  themeInfo: {
    theme: themes.LIGHT,
    palette: {},
    fonts: {},
    typography: {},
    distance: {},
    stackingIndexes: {},
    borderRadii: {},
    shadows: {},
    gradients: {},
    transitions: {},
    styles: {}
  }
}

export const UIContext = React.createContext(initContextValue);

export default class UI_InfoProvider extends React.Component {
  static instance: any;

  state = {
    navBarVisible: true,
    backdropVisible: false,
    themeInfo: {
      theme: themes.LIGHT,
      palette: { ...styleGuide.palette },
      fonts: { ...styleGuide.fonts },
      typography: generateTypographyTable(styleGuide.fonts, styleGuide.palette),
      distance: { ...styleGuide.distance },
      stackingIndexes: { ...styleGuide.stackingIndexes },
      borderRadii: { ...styleGuide.borderRadii },
      shadows: { ...styleGuide.shadows },
      gradients: { ...styleGuide.gradients },
      transitions: { ...styleGuide.transitions },
      styles: { ...styleGuide.styles }
    }
  };

  static getInstance() {
    // - TODO: -> Internationalize text
    if (!UI_InfoProvider.instance) throw new Error("Error -> UI_InfoProvider has not been mounted yet.");
    return UI_InfoProvider.instance;
  }

  componentDidMount() {
    if (UI_InfoProvider.instance !== undefined) {
      // - TODO: -> Internationalize text
      throw new Error("Error -> Only one UI_InfoProvider instance can be mounted at a time.");
    }
    UI_InfoProvider.instance = this;
  }

  // -> Toggle between light and dark theme
  toggleTheme = (): void => {
    const { themeInfo: { theme } } = this.state;
    if (theme === themes.LIGHT) {
      this.setState({ theme: themes.DARK });
    } else {
      this.setState({ theme: themes.LIGHT });
    }
  }

  // -> Toggle backdrop on and off
  toggleBackdrop = (): void => {
    console.log('UI_InfoProvider: toggleBackdrop() invoked');
    this.setState((prevState: UIContext) => {
      return { backdropVisible: !prevState.backdropVisible }
    })
  }

  render() {
    const { children } = this.props;
    const uiInfo = {...this.state};

    return (
      <UIContext.Provider value={{
        ...uiInfo,
        toggleTheme: this.toggleTheme,
        toggleBackdrop: this.toggleBackdrop,
      }}>
        {children}
      </UIContext.Provider>
    );
  }
}

// -> Higher Order Component function which injects theme info into a component's props
export const withTheme = (Component: any) => {
  return class extends React.PureComponent {
    render() {
      const { props } = this;
      return (
        <UIContext.Consumer>
          {
            (theme: any) => <Component {...{theme}} {...props} />
          }
        </UIContext.Consumer>
      );
    }
  }
}
