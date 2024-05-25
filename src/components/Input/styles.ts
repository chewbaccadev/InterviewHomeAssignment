import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin-top: 0.2rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledLabel = styled.label`
  width: 50%;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  color: #5b5b5b;
`;
