import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './TransitionStyles.css';

const BASE_CLASS_NAME = "scale-fade";

interface IScaleFadeProps {
  inStatus?: boolean;
}

const ScaleFade: React.FC<IScaleFadeProps> = (props) => {
  const [internalInStatus, setInternalInStatus] = useState<boolean | undefined>(true);
  const { children } = props;
  let { inStatus } = props;
  if (inStatus === undefined) inStatus = true;

  useEffect(() => {
    setInternalInStatus(inStatus);
  }, [inStatus]);

  return (
    <CSSTransition
      in={internalInStatus}
      appear={true}
      timeout={250} // - DEV NOTE -> Actual animation timeout seems to be controlled by CSS transitions in imported CSS file.
      classNames={BASE_CLASS_NAME}
    >
      {children}
    </CSSTransition>
  );
}

export default ScaleFade;
