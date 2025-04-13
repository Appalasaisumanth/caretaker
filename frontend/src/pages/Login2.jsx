import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Loader from '../assets/Loader'; // Ensure the path is correct

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
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

    if (formData.password && formData.username) {
      const formDataToSend = { username: formData.username, password: formData.password };
      const response = await fetch('https://fulltoss-backend-9igo.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        const temporary = await response.json();
        setIsLoading(false);
        setMessage(`Your team is ${temporary.result}, you can update them later`);
        localStorage.setItem('user', `${temporary.result}+${formData.username}`);
        setTimeout(() => {
          navigate('/shop');
        }, 5000);
      } else {
        const temporary = await response.json();
        setMessage(temporary.message);
        setIsLoading(false);
      }
    } else {
      setMessage('Input all fields');
      setIsLoading(false);
    }
  };

  const visibleHandler = () => {
    const passwordInput = document.getElementById('password2');
    passwordInput.type = 'text';
    setIsVisible(!visible);

    setTimeout(() => {
      passwordInput.type = 'password';
      setIsVisible(!visible);
    }, 500);
  };

  return (
    <LoginContainer>
      <Main2>
        <Main>
          <BackButton onClick={() => navigate('/')}>←</BackButton>
          <WelcomeText>welcome back</WelcomeText>
          <Text1>
            <div>New to the store</div>
            <ButtonNavig onClick={() => navigate('/register')}>Register</ButtonNavig>
          </Text1>
          <GInput>
            <Input
              type="text"
              id="user-name2"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder=" "
            />
            <Label htmlFor="user-name2">Username</Label>
          </GInput>
          <GInput>
            <Input
              type="password"
              id="password2"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
            />
            <Label htmlFor="password2">Password</Label>
            <EyeIcon
              src="/closed_eye.png"
              alt="closed-eye"
              onClick={visibleHandler}
            />
          </GInput>
          <ForgotPassword>
            <a href="/">forgot password</a>
          </ForgotPassword>
          <ButtonNavig onClick={submitHandler}>Submit</ButtonNavig>
          {isLoading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          )}
        </Main>
      </Main2>
    </LoginContainer>
  );
}

export default Login;

// Styled Components

const GInput = styled.div`
  position: relative;
  margin: 20px auto;
  width: 90%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  background: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    border-width: 2px;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    left: 5px;
    font-size: 12px;
    color: #000000;
    background-color: #ccc;
  }

  &::placeholder {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:focus::placeholder {
    opacity: 1;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  padding: 0 5px;
  font-size: 1rem;
  color: #333;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`;

const EyeIcon = styled.img`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const ForgotPassword = styled.div`
  margin-bottom: 10px;
  text-align: right;
  padding-right: 5%;

  a {
    color: #333;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoaderContainer = styled.div`
  width: 100px;
  margin: 20px auto;
`;

const Main2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
`;

const Main = styled.div`
  width: min(90vw, 420px);
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.3);
  padding: 30px 20px;
  text-align: center;
  font-size: 1.1rem;
  text-transform: capitalize;
`;

const BackButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  background: white;
  border-radius: 50%;
  border: 2px solid red;
  color: red;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const WelcomeText = styled.div`
  margin-bottom: 40px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

const Text1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  & > div {
    margin-right: 10px;
    font-size: 0.95rem;
    color: #333;
  }
`;

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('/your-background-image.jpg') center no-repeat; /* Add your background image */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
`;

const LoginBox = styled.div`
  width: min(90vw, 420px); /* Width adapts to viewport size */
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h2`
  color: #005bb5;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;


const ButtonNavig = styled.button`
  font-size: 20px;
  font-weight: 600;
  background: #397b83;
  color: #fff7e7;
  border: none;
  border-radius: 12px;
  padding: 10px 25px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #26575c;
    transform: scale(1.05);
  }
`;
