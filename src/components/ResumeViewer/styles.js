import styled from '@emotion/styled';

export const ViewerContainer = styled.div`
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

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  border-bottom: 2px solid ${props => props.isDarkMode ? '#ffffff' : '#333'};
  padding-bottom: 5px;
  margin-bottom: 10px;
`;