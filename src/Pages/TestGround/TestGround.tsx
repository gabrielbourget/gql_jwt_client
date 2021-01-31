// -> Beyond Codebase
import React from 'react';
// import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
// -> Within Codebase
// import { UIContext } from '../../Components/UI_InfoProvider/UI_InfoProvider';
// import CourageCircleLoader from '../../Components/Loaders/CircleLoader/Variants/CourageCircleLoader/CourageCircleLoader';
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
import EnrollmentForm from '../../Components/FormUtilities/ExampleForms/EnrollmentForm/EnrollmentForm';
import { NAV_BAR_HEIGHT } from '../../constants';

const styleGen = () => {
  return StyleSheet.create({
    cradle: {
      height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
      width: '100%',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
}


const TestGround: React.FC = () => {
  // const uiInfo = useContext(UIContext);
  const { cradle } = styleGen();

  return (
    <FillUnderNavBarCradle>
      <div className={css(cradle)}>
        
      </div>
    </FillUnderNavBarCradle>
  );
}

export default TestGround;
