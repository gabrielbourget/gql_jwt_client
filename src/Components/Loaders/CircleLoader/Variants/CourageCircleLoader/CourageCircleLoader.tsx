import React, { useContext } from 'react';
import { UIContext}  from '../../../../UI_InfoProvider/UI_InfoProvider';
import CircleLoader from '../../CircleLoader';

export const CourageCircleLoader: React.FC = () => {
  const { themeInfo: { palette }} = useContext(UIContext);

  return (
    <CircleLoader spinnerTrackColor={palette.grey1} spinnerColor={palette.primary}/>
  );
}

export default CourageCircleLoader;
