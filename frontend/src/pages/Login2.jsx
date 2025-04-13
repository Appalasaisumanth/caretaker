import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../assets/Loader'; // Ensure the path is correct


const roles = [
  { value: 'patient', label: 'Patient', route: PatientRegisterRoute },
  { value: 'doctor', label: 'Doctor', route: DoctorRegisterRoute },
  { value: 'fdo', label: 'FDO', route: FdoRegisterRoute },
  { value: 'deo', label: 'DEO', route: DeoRegisterRoute },
  { value: 'admin', label: 'Admin', route: AdminRegisterRoute },
];

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '', role: 'Patient' }); // Added role with default value
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (message) {
      toast(message, {
        autoClose: 5000,
        pauseOnHover: true,
        closeOnClick: true,
      });
    }
  }, [message]);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (formData.password && formData.username && formData.role) {
      
      const formDataToSend = { username: formData.username, password: formData.password };
      const response = await fetch(`{}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        const temporary = await response.json();
        setIsLoading(false);
        setMessage(`Welcome, ${formData.username}! Redirecting...`);
        localStorage.setItem('user', `${temporary.result}+${formData.username}+${formData.role}`); // Store role in localStorage
        setTimeout(() => {
          navigate('/dashboard');
        }, 5000);
      } else {
        const temporary = await response.json();
        setMessage(temporary.message);
        setIsLoading(false);
      }
    } else {
      setMessage('Please fill in all fields');
      setIsLoading(false);
    }
  };

  const visibleHandler = () => {
    const passwordInput = document.getElementById('password');
    passwordInput.type = visible ? 'password' : 'text';
    setIsVisible(!visible);
  };

  return (
    <LoginContainer>
      <LoginBox
        as={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <LoginTitle>Welcome to CarePlus</LoginTitle>
        <Text1>
          New to CarePlus?{' '}
          <NavLink onClick={() => navigate('/register')}>Register</NavLink>
        </Text1>
        <Form onSubmit={submitHandler}>
          <ButtonGroup>
            <BackButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              type="button"
            >
              ← Back
            </BackButton>
          </ButtonGroup>
          <InputGroup>
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Password</InputLabel>
            <InputWrapper>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <EyeIcon onClick={visibleHandler}>
                {visible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </EyeIcon>
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <InputLabel>Role</InputLabel>
            <Select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Patient">Patient</option>
              <option value="Admin">Admin</option>
              <option value="Deo">DEO</option>
              <option value="Fdo">FDO</option>
              <option value="Doctor"> Doctor </option>
            </Select>
          </InputGroup>
          <ForgotPassword>
            <a href="/forgot-password">Forgot Password?</a>
          </ForgotPassword>
          <SubmitButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Login'}
          </SubmitButton>
        </Form>
        {isLoading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastStyle={{
            background: '#fff',
            color: '#333',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </LoginBox>
    </LoginContainer>
  );
}

// Styled Components
const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e6f0fa, #d1e3f6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
`;

const LoginBox = styled.div`
  width: min(90vw, 450px);
  padding: 3rem 2.5rem;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 91, 181, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(8px);
`;

const LoginTitle = styled.h2`
  color: #005bb5;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 0.5px;
`;

const Text1 = styled.div`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #005bb5;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

const BackButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  background: #f8f9fa;
  border: 2px solid #007bff;
  color: #007bff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #007bff;
    color: white;
  }
`;

const InputGroup = styled(motion.div)`
  width: 95%;
  margin-bottom: 1.8rem;
  padding-right: 2rem;
  position: relative;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  outline: none;
  background: #fff;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #bbb;
    font-weight: 400;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  outline: none;
  background: #fff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.25);
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const ForgotPassword = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 1.5rem;

  a {
    color: #007bff;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #005bb5;
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(135deg, #007bff, #005bb5);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #005bb5, #003d80);
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoaderContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
`;

export default Login;