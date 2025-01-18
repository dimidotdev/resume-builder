import React from 'react';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  padding: 20px;
  background: ${props => props.isDarkMode ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  transition: all 0.3s ease;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.isDarkMode ? '#404040' : '#ddd'};
  border-radius: 4px;
  background-color: ${props => props.isDarkMode ? '#404040' : '#ffffff'};
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.isDarkMode ? '#404040' : '#ddd'};
  border-radius: 4px;
  min-height: 100px;
  background-color: ${props => props.isDarkMode ? '#404040' : '#ffffff'};
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ResumeForm = ({ formData, setFormData, isDarkMode }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
  
  return (
    <FormContainer isDarkMode={isDarkMode}>
      <h2>Informações Pessoais</h2>
      <FormGroup>
        <Label isDarkMode={isDarkMode}>Nome Completo</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
          isDarkMode={isDarkMode}
        />
      </FormGroup>
      <FormGroup>
        <Label>Nome Completo</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
        />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
        />
      </FormGroup>

      <FormGroup>
        <Label>Telefone</Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
        />
      </FormGroup>

      <FormGroup>
        <Label>Experiência Profissional</Label>
        <TextArea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Descreva sua experiência profissional"
        />
      </FormGroup>

      <FormGroup>
        <Label>Formação Acadêmica</Label>
        <TextArea
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Descreva sua formação acadêmica"
        />
      </FormGroup>

      <FormGroup>
        <Label>Habilidades</Label>
        <TextArea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Liste suas principais habilidades"
        />
      </FormGroup>
    </FormContainer>
  );
};

export default ResumeForm;