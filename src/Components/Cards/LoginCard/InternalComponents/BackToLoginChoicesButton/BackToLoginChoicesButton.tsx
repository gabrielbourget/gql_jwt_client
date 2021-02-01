// -> Beyond Codebase
import React, { useContext } from 'react';
// -> Within Codebase 
import Button from '../../../../../Components/Button/Button';
import ArrowLeftButton from '../../../../../Components/VisualUtilities/IconPresets/ArrowLeftIcon';
import { UIContext, ThemeInfo } from '../../../../../Components/UI_InfoProvider/UI_InfoProvider';
import { ROUNDED } from '../../../../../constants';

interface IBackToLoginChoicesButtonProps {
  onClick(): void;
}

const BackToLoginChoicesButton: React.FC<IBackToLoginChoicesButtonProps> = (props) => {
  const { onClick } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);

  return (
    <Button
      // - TODO: -> Internationalize Text
      buttonText="Login Options"
      icon={<ArrowLeftButton size={17.5} color={themeInfo.palette.primary} />}
      buttonGeometry={ROUNDED}
      iconTextSpacing={themeInfo.distance.one}
      color={themeInfo.palette.white}
      textColor={themeInfo.palette.primary}
      customCradleStyles={{
        transition: `
          ${themeInfo.transitions.boxShadowTransition},
          ${themeInfo.transitions.bgColorTransition}
        `,
        backgroundColor: 'transparent',
        paddingLeft: 2.5,
        paddingRight: 5,
        paddingTop: 2.5,
        paddingBottom: 2.5,
        width: 'min-content',
        whiteSpace: 'no-wrap',
      }}
      customCradleHoverStyles={{
        boxShadow: themeInfo.shadows.two,
        backgroundColor: themeInfo.palette.white,
      }}
      customTextStyles={{
        ...themeInfo.fonts.tertiary.bold,
        color: themeInfo.palette.primary,
      }}
      customIconCradleStyles={{
        display: 'flex',
      }}
      onClick={onClick}
    />
  );
}

export default BackToLoginChoicesButton;
