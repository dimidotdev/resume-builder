import React from 'react';
import styled from '@emotion/styled';

const ViewerContainer = styled.div`
  padding: 30px;
  background: ${props => props.isDarkMode ? '#2d2d2d' : 'white'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 21cm;
  min-height: 29.7cm;
  margin: 0 auto;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  transition: all 0.3s ease;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const ResumeViewer = React.forwardRef(({ formData, isDarkMode }, ref) => {
  return (
    <ViewerContainer ref={ref} isDarkMode={isDarkMode}>
            <Header>
        <h1>{formData.fullName}</h1>
        <p>{formData.email} | {formData.phone}</p>
      </Header>

      <Section>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <p>{formData.experience}</p>
      </Section>

      <Section>
        <SectionTitle>Formação Acadêmica</SectionTitle>
        <p>{formData.education}</p>
      </Section>

      <Section>
        <SectionTitle>Habilidades</SectionTitle>
        <p>{formData.skills}</p>
      </Section>
    </ViewerContainer>
  );
});

export default ResumeViewer;