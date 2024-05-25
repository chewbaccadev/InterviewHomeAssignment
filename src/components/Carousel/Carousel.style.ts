import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 18rem;
`;

export const CardsContainer = styled.div<{ $current: number }>`
  display: flex;
  gap: 5rem;
  padding: 2rem 1.5rem;

  transition: transform 0.25s linear;
  transform: translateX(-${(props) => props.$current * 20}rem);
`;

export const ButtonContainer = styled.div`
  align-self: center;
`;
