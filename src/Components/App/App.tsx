// -> Beyond Codebase
import React, { useContext, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// -> Within Codebase
import { UIContext } from '../UI_InfoProvider/UI_InfoProvider';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../Backdrop/Backdrop';
import RoutingModule from '../RoutingModule/RoutingModule';
import { REFRESH_TOKEN_URL } from '../../constants';
import { setAccessToken } from '../../accessToken';

const App: React.FC = () => {
  const uiContext = useContext(UIContext);
  const { backdropVisible } = uiContext;

  useEffect(() => {
    (async () => {
      const response = await fetch(REFRESH_TOKEN_URL, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      console.log("data -> ", data);
      setAccessToken(data.accessToken);
    })();
  }, []);
  
  return (
    <>
      <NavBar />
      { backdropVisible && <Backdrop /> }
      <RoutingModule />
      <ToastContainer />
    </>
  );
}

export default App;