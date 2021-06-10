import styled from 'styled-components';


export const Board = styled.div`
  border: 1rem solid #757a52;
  background: #bcc484;
  width: 400px;
  height: 400px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
    
`;
