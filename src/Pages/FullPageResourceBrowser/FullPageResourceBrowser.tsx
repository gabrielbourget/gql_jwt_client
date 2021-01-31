// -> Beyond Codebase
import React, { useContext } from 'react';
import { css, StyleSheet } from 'aphrodite';
// -> Within Codebase
import EmbeddableResourceBrowser from '../../Components/EmbeddableResourceBrowser/EmbeddableResourceBrowser';
import { UIContext, ThemeInfo } from '../../Components/UI_InfoProvider/UI_InfoProvider';
import { gabrielData } from '../../staticData/gabrielData';
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
import { NAV_BAR_HEIGHT } from '../../constants';

const FullPageResourceBrowser: React.FC = () => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { cradle } = styleGen(themeInfo);

  return (
    <FillUnderNavBarCradle>
      <div className={css(cradle)}>
        <EmbeddableResourceBrowser resources={gabrielData} />
      </div>
    </FillUnderNavBarCradle>
  );
}

const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    cradle: {
      height: 'auto',
      minHeight: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
      width: '100%',
      display: 'flex',
      padding: themeInfo.distance.namedVariants.screenPadding,
    }
  })
}

export default FullPageResourceBrowser;
