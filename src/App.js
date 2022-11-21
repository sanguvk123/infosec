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

function App() {
  let unit = localStorage.getItem('User_unit');
  let userid = localStorage.getItem('User_id');
  console.log('in main apppppppp');
  console.log(unit);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superhome" element={localStorage.getItem('User_unit') && localStorage.getItem('User_unit') === "superadmin" ? <Superuserhome /> : <Navigate to="/" />} />
        <Route path="/wassignpage" element={localStorage.getItem('User_unit') && localStorage.getItem('User_unit') === "webadmin" ? <Wassignpage /> : <Navigate to="/" />} />
        <Route path="/vassignpage" element={localStorage.getItem('User_unit') && localStorage.getItem('User_unit') === "voipadmin" ? <Vassignpage /> : <Navigate to="/" />} />
        <Route path="/fassignpage" element={localStorage.getItem('User_unit') && localStorage.getItem('User_unit') === "ftpadmin" ? <Fassignpage /> : <Navigate to="/" />} />
        <Route path="/superhome/addrole" element={<Addrole />} />
        <Route path="/superhome/makeadmin" element={<Makeadmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;