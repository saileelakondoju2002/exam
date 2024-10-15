import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Login: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [authId, setAuthId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authId === 'CYBERWAVE.INFO.TEST') {
      navigate('/main');
    } else {
      alert('Invalid Authentication ID');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>CyberWave Login</h2>
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="CyberWave Authentication ID"
          value={authId}
          onChange={(e) => setAuthId(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;