import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login2';
import ForgotPassword from './pages/ForgotPassword'
import AdminHome from './pages/AdminHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path ='/forgot_password' element={<ForgotPassword/>} />
        <Route path="/admin" element={<AdminHome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;