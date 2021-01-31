// -> Beyond Codebase
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// -> Within Codebase
import UI_InfoProvider from '../UI_InfoProvider/UI_InfoProvider';
import App from '../App/App';

const WrappedApp: React.FC = () => {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <UI_InfoProvider>
      <Router>
        <App />
      </Router>
    </UI_InfoProvider>
  );
}

export default WrappedApp;
