import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const ScoreCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Certificate = styled.div`
  background: white;
  color: black;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const DownloadButton = styled.button`
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #45a049;
  }
`;

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const { score, total } = location.state as { score: number; total: number };
  const percentage = Math.round((score / total) * 100);

  const downloadCertificate = () => {
    // TODO: Implement certificate download functionality
    alert('Certificate download functionality to be implemented');
  };

  return (
    <ResultsContainer>
      <h1>Test Results</h1>
      <ScoreCard>
        <h2>Your Score: {score} / {total}</h2>
        <p>Percentage: {percentage}%</p>
        <p>Percentile Ranking: Coming soon...</p>
      </ScoreCard>
      <Certificate>
        <h2>CyberWave Tech Test</h2>
        <p>This certifies that</p>
        <h3>[Student Name]</h3>
        <p>has successfully completed the assessment in</p>
        <h3>[Subject]</h3>
        <p>with a score of {percentage}%</p>
      </Certificate>
      <DownloadButton onClick={downloadCertificate}>Download E-Certificate</DownloadButton>
      <br />
      <br />
      <Link to="/main">Back to Main Page</Link>
    </ResultsContainer>
  );
};

export default ResultsPage;