import { darken } from 'polished';
import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
    position: relative;
  }

  p {
    color: ${({ theme }) => theme.gray};
    font-size: 1.3rem;
    font-weight: 300;
    text-align: justify;
  }

  button {
    background: ${({ theme }) => theme.backgroundLight};
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem;
    transition: 0.5s;
    margin-top: 2rem;

    &:hover {
      background: ${({ theme }) => darken(0.08, theme.backgroundLight)};
    }

    a {
      color: ${({ theme }) => theme.gray};
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 700px) {
    > main {
      padding: 0 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      padding: 0.7rem 2rem;

      a {
        font-size: 0.9rem;
      }
    }
  }

  > img {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (max-width: 1000px) {
      width: 150%;
      left: -5rem;
    }

    @media (max-width: 800px) {
      display: none;
      visibility: hidden;
    }
  }
`;
