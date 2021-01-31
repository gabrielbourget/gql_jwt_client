import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NAV_BAR_HEIGHT } from '../../../../constants';
import { UIContext } from '../../../UI_InfoProvider/UI_InfoProvider';

interface IFillUnderNavBarCradleProps {
  customCradleStyles?: any;
}

export const FillUnderNavBarCradle: React.FC<IFillUnderNavBarCradleProps> = (props) => {
  const { navBarVisible } = useContext(UIContext);
  const { children, customCradleStyles } = props;
  const { cradle } = styleGen(navBarVisible);

  return (
    <div className={css(cradle, customCradleStyles)}>
      { children }
    </div>
  );
}

const styleGen = (navBarVisible: boolean) => {
  return StyleSheet.create({
    cradle: {
      height: 'auto',
      minHeight: navBarVisible ? `calc(100vh - ${NAV_BAR_HEIGHT}px)` : '100vh',
      // height: navBarVisible ? `calc(100vh - ${NAV_BAR_HEIGHT}px)` : '100vh',
      width: '100%',
      paddingTop: `${NAV_BAR_HEIGHT}`,
      display: 'flex', // -> Nesting components can use flex: 1 to expand to whole containing space
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
}

export default FillUnderNavBarCradle;
