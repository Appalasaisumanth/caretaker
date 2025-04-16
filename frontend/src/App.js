import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login2';
import ForgotPassword from './pages/ForgotPassword'
import AdminHome from './pages/AdminHome'
import AdminDoctor from './pages/AdminDoctor';
import Doctors from './pages/Doctors';
import AdminDeo from './pages/AdminDeo';
import AdminFdo from './pages/AdminFdo';
import AddOperator from './pages/AddOperator';
import PatientHome from './pages/PatientHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path ='/forgot_password' element={<ForgotPassword/>} />
        <Route path ='/adminh' element={<AdminHome/>}/>
        <Route path ='/admin/doctor' element={<AdminDoctor/>}/>
        <Route path ='/admin/fdo' element={<AdminFdo/>}/>
        <Route path ='/admin/deo' element={<AdminDeo/>}/>
        <Route path ='/doctors' element={<Doctors/>}/>
        <Route path ='/admin/add' element={<AddOperator/>}/>
        <Route path ='/patient' element={<PatientHome/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;