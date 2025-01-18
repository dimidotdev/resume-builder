import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import ResumeForm from './components/ResumeForm';
import ResumeViewer from './components/ResumeViewer';
import { useTheme } from './context/ThemeContext';
import {
  Container,
  Button,
  ThemeToggleButton,
  MainTitle
} from './styles/App.styles';

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
            <ResumeForm 
              formData={formData} 
              setFormData={setFormData} 
              isDarkMode={isDarkMode} 
            />
            <Button onClick={handleDownloadPDF}>
              Download PDF
            </Button>
          </div>
          <ResumeViewer 
            ref={resumeRef} 
            formData={formData} 
            isDarkMode={isDarkMode} 
          />
        </Container>
      </div>
    </Container>
  );
}

export default App;