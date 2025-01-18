import styled from '@emotion/styled';

export const FormContainer = styled.div`
  padding: 20px;
  background: ${props => props.isDarkMode ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  transition: all 0.3s ease;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
`;

export const Input = styled.input`
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

export const TextArea = styled.textarea`
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