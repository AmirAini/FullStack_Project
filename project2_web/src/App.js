import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import {store,persistor} from './components/redux/store';
import { Provider } from 'react-redux';

import Dashboard from './containers/dashboard/dashboard'
import Login from './containers/frontPage/login';
import Register from './containers/frontPage/register';
import Home from './containers/frontPage/home';
import TablePage from './containers/dashboard/tablePage';
import StepContainer from './containers/dashboard/step';
import UserProfile from './containers/dashboard/userProfile';
import StatContainer from './containers/dashboard/stats';

function App() {
  return (
      // <Router>
        <Routes>
          <Route path="/dashboard/" exact element={ <Dashboard/>} name="Main"/>
          <Route path="/" element={ <Login/>} name="Login"/>
          <Route path="/register" element={ <Register/>} name="Register"/>
          <Route path="/about" element={<Home/>} name="Home"/>
          <Route path="/table" element={<TablePage/>} name='Table'/>
          <Route path='/step' element={<StepContainer/>} name='Step'/>
          <Route path='/profile' element={<UserProfile/>} name='UserProfile'/>
          <Route path='/stats' element={<StatContainer/>} name='StatContainer'/>

        </Routes>
      // </Router>
  );
}

export default App;
