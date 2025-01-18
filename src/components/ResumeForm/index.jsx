import React from 'react';
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea
} from './styles';

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