import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 15rem;

  padding: 2rem;
  border-radius: 1rem;

  background-color: #fafafa;
  box-shadow: 0 0.5rem 1rem #5f5f5f;
`;

export const StyledImage = styled.img`
  border-radius: 50%;

  box-shadow: 0 0.25rem 0.25rem #5f5f5f;
`;

export const StyledTitle = styled.p`
  color: #7d7d7d;

  font-size: 1rem;
  margin: 3rem 0 0;
`;
export const StyledName = styled.p`
  color: #272727;

  margin: 0;
  font-size: 1.25rem;
`;
