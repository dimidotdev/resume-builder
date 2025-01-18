import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#f0f2f5'};
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background: #0056b3;
  }
`;

export const ThemeToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  color: ${props => props.isDarkMode ? '#000000' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
`;