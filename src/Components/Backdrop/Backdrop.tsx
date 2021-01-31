import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import UI_InfoProvider, { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';

interface IBackdropProps {
  color?: string;
  opacity?: number;
}

const Backdrop: React.FC<IBackdropProps> = (props) => {
  const uiContext = useContext(UIContext);
  const { themeInfo }: { themeInfo: ThemeInfo } = uiContext;
  const { backdropCradle } = styleGen(props, themeInfo);
  let UIInfoProvider: any;

  const dismissBackdrop = () => {
    UIInfoProvider = UI_InfoProvider.getInstance();
    console.log('UIInfoProvider -> ', UIInfoProvider);
    UIInfoProvider.toggleBackdrop();
    console.log('Backdrop: dismissBackdrop() invoked');
  }

  return (
    <div onClick={dismissBackdrop} className={css(backdropCradle)}></div>
  );
}

const styleGen = (props: IBackdropProps, themeInfo: ThemeInfo) => {
  const { color, opacity } = props;
  const { palette } = themeInfo;

  return StyleSheet.create({
    backdropCradle: {
      position: 'fixed',
      top: 0, right: 0, bottom: 0, left: 0,
      zIndex: themeInfo.stackingIndexes.backdrop,
      backgroundColor: color ? color : palette.black,
      opacity: opacity ? opacity : themeInfo.styles.backdropOpacity,
    }
  });
}

export default Backdrop;
