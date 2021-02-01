// -> Beyond Codebase
import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom'
import { css } from 'aphrodite';
// -> Within Codebase
// import Button from '../../Components/Button/Button';
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
// import CircleLoader from '../../Components/Loaders/CircleLoader/CircleLoader';
import { User } from '../../Types';
import { UIContext, ThemeInfo } from '../../Components/UI_InfoProvider/UI_InfoProvider';
// import { ROUNDED, GABRIEL_DATA_ROUTE } from '../../constants';
import { useUsersQuery } from "../../generated/graphql";
// -> Within Component
import { styleGen } from './HomeStyles';

const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cradle, titleText } = styleGen(themeInfo);
  // const navigateToData = () => history.push(GABRIEL_DATA_ROUTE);
  


  const { data }: any = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) return <div> loading </div>;

  return (
    <FillUnderNavBarCradle>
      <div className={css(cradle)}>
        {/* <p className={css(titleText)}>Knowledge Commons</p> */}
        {/* <div style={{ marginTop: themeInfo.distance.eight }}></div> */}

        <ul>
          {data && data.users && data?.users.map((user: User) => {
            return (
              <li key={user.id}>
                {user.email}, {user.id}
              </li>
            )
          })}
        </ul>

        {/* <div style={{ marginTop: themeInfo.distance.two }}></div>
        <Button
          buttonText="Gabriel B"
          buttonGeometry={ROUNDED}
          onClick={navigateToData}
          customTextStyles={{ color: themeInfo.palette.white }}
        /> */}
        {/* {
          (!loading) ? (
            <>
              <p className={css(titleText)}>Knowledge Commons</p>
              <div style={{ marginTop: themeInfo.distance.eight }}></div>
      
              <ul>
                {data && data.users && data?.users.map((user: User) => {
                  return (
                    <li key={user.id}>
                      {user.email}, {user.id}
                    </li>
                  )
                })}
              </ul>
      
              <div style={{ marginTop: themeInfo.distance.two }}></div>
              <Button
                buttonText="Gabriel B"
                buttonGeometry={ROUNDED}
                onClick={navigateToData}
                customTextStyles={{ color: themeInfo.palette.white }}
              />
            </>
          ) : (
            <CircleLoader spinnerColor={themeInfo.palette.primary} />
          )
        } */}
      </div>
    </FillUnderNavBarCradle>
  );
}

export default Home;
