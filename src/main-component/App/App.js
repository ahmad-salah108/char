
import React from 'react';
import AllRoute from '../router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sassRTL/style.scss';
import "../../i18nextConf"
import 'antd/dist/antd.min.css';

const App = () => {

  return (
    <div className="App" id='scrool'>
      <AllRoute />
      <ToastContainer />
    </div>
  );
}

export default App;
