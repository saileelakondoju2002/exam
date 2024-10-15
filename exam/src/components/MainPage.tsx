import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 800px;
`;

const SubjectButton = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const subjects = [
  'Web Development',
  'Android Development',
  'Data Science',
  'Java Programming',
  'DSA (C++)',
  'Python Programming',
  'UI/UX Design',
  'Artificial Intelligence',
  'Machine Learning'
];

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <h1>CyberWave Assessment Platform</h1>
      <SubjectGrid>
        {subjects.map((subject) => (
          <SubjectButton key={subject} to={`/test/${subject.toLowerCase().replace(/ /g, '-')}`}>
            {subject}
          </SubjectButton>
        ))}
      </SubjectGrid>
    </MainContainer>
  );
};

export default MainPage;