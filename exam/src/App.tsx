import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import MainPage from './components/MainPage';
import TestPage from './components/TestPage';
import ResultsPage from './components/ResultsPage';
import AIAssistant from './components/AIAssistant';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  font-family: 'Arial', sans-serif;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/test/:subject" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
        <AIAssistant />
      </AppContainer>
    </Router>
  );
};

export default App;