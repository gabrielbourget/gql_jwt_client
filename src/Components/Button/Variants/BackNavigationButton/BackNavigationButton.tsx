// -> Beyond Codebase
import React, { useContext } from 'react';
// -> Within Codebase 
import Button from '../../Button';
import ArrowLeftIcon  from '../../../VisualUtilities/IconPresets/ArrowLeftIcon';
import { UIContext, ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { ROUNDED } from '../../../../constants'

interface ICourageBackButtonProps {
  buttonText?: string;
  onClick(): void;
}

const CourageBackButton: React.FC<ICourageBackButtonProps> = (props) => {
  const { onClick, buttonText } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);

  return (
    <Button
      // - TODO: -> Internationalize Text
      buttonText={buttonText}
      icon={<ArrowLeftIcon size={17.5} color={themeInfo.palette.primary} />}
      buttonGeometry={ROUNDED}
      iconTextSpacing={themeInfo.distance.one}
      color={themeInfo.palette.white}
      textColor={themeInfo.palette.black}
      customCradleStyles={{
        transition: `
          ${themeInfo.transitions.boxShadowTransition},
          ${themeInfo.transitions.bgColorTransition}
        `,
        backgroundColor: 'transparent',
        paddingLeft: 2.5,
        paddingRight: 5,
        paddingTop: 2.5,
        paddingBottom: 2.5
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

export default CourageBackButton;
