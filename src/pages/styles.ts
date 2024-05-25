import styled from 'styled-components';

export const PageWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;
