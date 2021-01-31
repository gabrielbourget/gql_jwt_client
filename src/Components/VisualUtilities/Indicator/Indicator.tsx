// -> Beyond Codebase
import React, { useContext, useState, useEffect } from 'react';
// -> Within Codebase
import { CheckmarkIcon } from '../IconPresets';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { ROUNDED } from '../../../constants';
import { styleGuide } from '../../../StyleGuide/styleGuide';
// -> Within Component
import { styleGen } from './IndicatorStyles';
import { calibrateComponent, IIndicatorProps } from './helpers';

const DEFAULT_INDICATOR_SIZE = 15;

const Indicator: React.FC<IIndicatorProps> = (props) => {
  const {
    showActiveIcon, active: activeStatus, activeIcon, size, text, toggleable
  } = props;
  const [ active, setActiveStatus ] = useState(activeStatus);

  useEffect(() => {
    setActiveStatus(activeStatus);
  }, [activeStatus]);

  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo);
  const {
    indicatorCradleStylechain, indicatorTextStylechain
  } = calibrateComponent(props, themeInfo, active, styles);
  const computedSize = size ? size : DEFAULT_INDICATOR_SIZE;
  const computedActiveicon =
    activeIcon ? activeIcon : <CheckmarkIcon color={themeInfo.palette.white} size={computedSize - 2.5} />;

  const onIndicatorClick = () => {
    const { onClick, id, toggleable } = props;

    if (!toggleable) return;
    if (onClick) onClick(id);
    setActiveStatus(!active);
  }

  const computedOnClick = toggleable ? () => onIndicatorClick() : () => {};

  return (
    <div className={indicatorCradleStylechain} onClick={computedOnClick}>
      {
        (showActiveIcon && (!text)) ? computedActiveicon : null
      }
      {
        (text) ? <p className={indicatorTextStylechain}>{text}</p> : null
      }
    </div>
  );
}

Indicator.defaultProps = {
  size: DEFAULT_INDICATOR_SIZE,
  borderWidth: 2,
  geometry: ROUNDED,
  showActiveIcon: false,
  inactiveBackgroundColor: 'transparent',
  backgroundColorTransition: styleGuide.transitions.bgColorTransition,
}

export default Indicator;
