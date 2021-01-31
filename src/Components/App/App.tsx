// -> Beyond Codebase
import React, { useContext } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// -> Within Codebase
import { UIContext } from '../UI_InfoProvider/UI_InfoProvider';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../Backdrop/Backdrop';
import RoutingModule from '../RoutingModule/RoutingModule';

const App: React.FC = () => {
  const uiContext = useContext(UIContext);
  const { backdropVisible } = uiContext;
  
  // - TODO: -> Integrate system-scope <Alert /> system when component is built/tested.
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