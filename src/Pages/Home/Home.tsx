// -> Beyond Codebase
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { css } from 'aphrodite';
// -> Within Codebase
import Button from '../../Components/Button/Button';
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
import { UIContext, ThemeInfo } from '../../Components/UI_InfoProvider/UI_InfoProvider';
import { ROUNDED, GABRIEL_DATA_ROUTE } from '../../constants';
import { underConstructionAlert } from '../../helpers';
// -> Within Component
import { styleGen } from './HomeStyles';

const Home: React.FC = () => {
  const history = useHistory();
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { cradle, titleText } = styleGen(themeInfo);

  const navigateToData = () => history.push(GABRIEL_DATA_ROUTE);

  return (
    <FillUnderNavBarCradle>
      <div className={css(cradle)}>
        <p className={css(titleText)}>Knowledge Commons</p>
        <div style={{ marginTop: themeInfo.distance.eight }}></div>
        <Button
          buttonText="Gabriel B"
          buttonGeometry={ROUNDED}
          onClick={navigateToData}
          customTextStyles={{ color: themeInfo.palette.white }}
        />
      </div>
    </FillUnderNavBarCradle>
  );
}

export default Home;
