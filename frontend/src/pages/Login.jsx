import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Styled Components (Reusing styles from Home where applicable)
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormSection = styled.section`
  padding: 3rem 0;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FormTitle = styled(motion.h2)`
  color: #005bb5;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled(motion.button)`
  background: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #005bb5;
  }
`;

const LinkText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    console.log('Login submitted');
  };

  return (
    <Container>
      <FormSection>
        <FormContainer>
          <FormTitle initial="hidden" animate="visible" variants={fadeIn}>
            Login to CarePlus
          </FormTitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </InputGroup>
            {/* Example error message (optional, can be dynamic) */}
            {/* <ErrorMessage>Invalid email or password</ErrorMessage> */}
            <Button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </Button>
          </Form>
          <LinkText>
            Don't have an account? <Link href="/register">Register here</Link>
          </LinkText>
          <LinkText>
            <Link href="/forgot-password">Forgot Password?</Link>
          </LinkText>
        </FormContainer>
      </FormSection>
    </Container>
  );
};

export default Login;