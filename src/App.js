import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { jsPDF } from 'jspdf';
import ResumeForm from './components/ResumeForm';
import ResumeViewer from './components/ResumeViewer';

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
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

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    skills: ''
  });

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
    <div>
      <h1 style={{ textAlign: 'center' }}>Resume Builder</h1>
      <Container>
        <div>
          <ResumeForm formData={formData} setFormData={setFormData} />
          <Button onClick={handleDownloadPDF}>
            Download PDF
          </Button>
        </div>
        <ResumeViewer ref={resumeRef} formData={formData} />
      </Container>
    </div>
  );
}

export default App;