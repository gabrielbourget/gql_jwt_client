// -> Beyond Codebase
import React from 'react';
// import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
// -> Within Codebase
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
import { NAV_BAR_HEIGHT } from '../../constants';
import { useHelloQuery } from '../../generated/graphql';

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
  const { data, loading } = useHelloQuery();

  return (
    <FillUnderNavBarCradle>
      <div className={css(cradle)}>
        {
          (loading || !data) ? (
            <p>loading...</p>
          ) : (
            <p>{data.hello}</p>
          )
        }
      </div>
    </FillUnderNavBarCradle>
  );
}

export default TestGround;
