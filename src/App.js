import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { jsPDF } from 'jspdf';
import ResumeForm from './components/ResumeForm';
import ResumeViewer from './components/ResumeViewer';
import { useTheme } from './context/ThemeContext';

const Container = styled.div`
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

const Button = styled.button`
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

const ThemeToggleButton = styled.button`
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

const MainTitle = styled.h1`
  text-align: center;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
`;

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    skills: ''
  });

  const { isDarkMode, toggleTheme } = useTheme();
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const content = resumeRef.current;
    const doc = new jsPDF('p', 'pt', 'a4');
    
    doc.html(content, {
      callback: function(doc) {
        doc.save('resume.pdf');
      },
      x: 15,
      y: 15,
      width: 170,
      windowWidth: 650
    });
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <ThemeToggleButton onClick={toggleTheme} isDarkMode={isDarkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </ThemeToggleButton>
      <div>
        <MainTitle isDarkMode={isDarkMode}>Resume Builder</MainTitle>
        <Container>
          <div>
            <ResumeForm formData={formData} setFormData={setFormData} isDarkMode={isDarkMode} />
            <Button onClick={handleDownloadPDF}>
              Download PDF
            </Button>
          </div>
          <ResumeViewer ref={resumeRef} formData={formData} isDarkMode={isDarkMode} />
        </Container>
      </div>
    </Container>
  );
}

export default App;