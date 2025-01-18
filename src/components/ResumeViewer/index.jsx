import React from 'react';
import {
  ViewerContainer,
  Header,
  Section,
  SectionTitle
} from './styles';

const ResumeViewer = React.forwardRef(({ formData, isDarkMode }, ref) => {
  return (
    <ViewerContainer ref={ref} isDarkMode={isDarkMode}>
      <Header>
        <h1>{formData.fullName}</h1>
        <p>{formData.email} | {formData.phone}</p>
      </Header>

      <Section>
        <SectionTitle isDarkMode={isDarkMode}>Experiência Profissional</SectionTitle>
        <p>{formData.experience}</p>
      </Section>

      <Section>
        <SectionTitle isDarkMode={isDarkMode}>Formação Acadêmica</SectionTitle>
        <p>{formData.education}</p>
      </Section>

      <Section>
        <SectionTitle isDarkMode={isDarkMode}>Habilidades</SectionTitle>
        <p>{formData.skills}</p>
      </Section>
    </ViewerContainer>
  );
});

export default ResumeViewer;