import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Wadmin from './pages/Wadmin/Wadmin';
import Vadmin from './pages/Vadmin/Vadmin';
import Fadmin from './pages/Fadmin/Fadmin';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Superuserhome from './pages/Superuserhome/Superuserhome';
import Wassignpage from './pages/Assignpage/Wassignpage';
import Vassignpage from './pages/Assignpage/Vassignpage';
import Fassignpage from './pages/Assignpage/Fassignpage';
import Addrole from './pages/Superuserhome/Addrole';
import Makeadmin from './pages/Superuserhome/Makeadmin';
import AssignTaskToRole from './pages/Superuserhome/Tasktorole';
import ErrorOops from './pages/Errorpage/Oops';

function App() {
  let unit = localStorage.getItem('User_unit');
  let userid = localStorage.getItem('User_id');
  console.log('in main apppppppp');
  console.log(unit);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superhome" element={
          <RequireAuth>    <Superuserhome /> </RequireAuth>
        } />
        <Route path="/wassignpage" element={
          <RequireAuthw>    <Wassignpage /> </RequireAuthw>
        } />
        <Route path="/vassignpage" element={
          <RequireAuthv>    <Vassignpage /> </RequireAuthv>
        } />
        <Route path="/fassignpage" element={
          <RequireAuthf>    <Fassignpage /> </RequireAuthf>
        } />
        <Route path="/superhome/addrole" element={
          <RequireAuth>    <Addrole /> </RequireAuth>
        } />
        <Route path="/superhome/makeadmin" element={
          <RequireAuth>    <Makeadmin /> </RequireAuth>
        } />
        <Route path="/errorpage" element={<ErrorOops />} />
      </Routes>
    </BrowserRouter>
  )
}


function RequireAuth({ children }) {
  let unit = localStorage.getItem('User_unit');
  let userid = localStorage.getItem('User_id');
  console.log('ekjejkejkjekejkejkejkejekjekkkkkkkkkkkkkkkkkkkkkkk');
  console.log(unit);
  return userid && unit === 'superadmin' ? children : <Navigate to="/" />;
}
function RequireAuthw({ children }) {
  let unit = localStorage.getItem('User_unit');
  let userid = localStorage.getItem('User_id');
  return userid && unit === 'webadmin' ? children : <Navigate to="/" />;
}
function RequireAuthv({ children }) {
  let unit = localStorage.getItem('User_unit');
  let userid = localStorage.getItem('User_id');
  return userid && unit === 'voipadmin' ? children : <Navigate to="/" />;
}
function RequireAuthf({ children }) {
  let unit = localStorage.getItem('User_unit');
  let userid = localStorage.getItem('User_id');
  return userid && unit === 'ftpadmin' ? children : <Navigate to="/" />;
}

export default App;