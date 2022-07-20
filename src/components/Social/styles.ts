import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }

    @media (max-width: 1000px) {
      gap: 1rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    max-width: 19rem;
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;

    transition: 0.4s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
    }

    p {
      color: ${({ theme }) => theme.textHighlight};
      font-size: 1rem;
      font-weight: 300;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem;
      background: ${({ theme }) => theme.background};
      border: none;
      border-radius: 1rem;
    }

    a {
      color: ${({ theme }) => theme.border};
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  &:hover > div {
    filter: brightness(1.07);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    background: ${({ theme }) => theme.gradientReverse};
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
