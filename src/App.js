import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Wadmin from './pages/Wadmin/Wadmin';
import Vadmin from './pages/Vadmin/Vadmin';
import Fadmin from './pages/Fadmin/Fadmin';
import Home from './pages/Home/Home';
import Signup from './pages/Home/Signup';
import Navbar from './Components/Navbar/Navbar';
import Superuserhome from './pages/Superuserhome/Superuserhome';
import Wassignpage from './pages/Assignpage/Wassignpage';
import Vassignpage from './pages/Assignpage/Vassignpage';
import Fassignpage from './pages/Assignpage/Fassignpage';
import Addrole from './pages/Superuserhome/Addrole';
import Makeadmin from './pages/Superuserhome/Makeadmin';
import AssignTaskToRole from './pages/Superuserhome/Tasktorole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superhome" element={<Superuserhome />} />
        <Route path="/wassignpage" element={<Wassignpage />} />
        <Route path="/vassignpage" element={<Vassignpage />} />
        <Route path="/fassignpage" element={<Fassignpage />} />
        <Route path="/addrole" element={<Addrole />} />
        <Route path="/makeadmin" element={<Makeadmin />} />
        <Route path="/addrole" element={<Addrole />} />
        <Route path="/assigntasktorole" element={<AssignTaskToRole />} />
        <Route path="/signup" component={<Signup />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;