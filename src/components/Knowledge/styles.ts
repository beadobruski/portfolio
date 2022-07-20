import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  img {
    position: absolute;
    left: 0;
    width: 100%;

    @media (max-width: 1000px) {
      width: 150%;
      left: -5rem;
      display: none;
      visibility: hidden;
    }

    @media (max-width: 700px) {
      width: 200%;
      left: -15rem;
    }

    @media (max-width: 498px) {
      width: 300%;
      left: -30rem;
    }
  }

  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    @media (max-width: 1000px) {
      gap: 2rem;
      margin-bottom: 5rem;
    }

    @media (max-width: 700px) {
      gap: 2.5rem;
      flex-wrap: wrap;
    }
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.gradient};
  padding: 2rem;

  &:nth-child(even) {
    background: ${({ theme }) => theme.gradientReverse};
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => darken(0.09, theme.background)};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => darken(0.15, theme.background)};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1500px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;
