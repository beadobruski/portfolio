import { darken } from 'polished';
import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.backgroundLight};
    cursor: pointer;
    overflow: hidden;

    transition: 0.2s;

    &:hover {
      border-color: ${({ theme }) => theme.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      h1 {
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.gray};
        background: #fff;
        border-radius: 0.2rem 0.5rem;
        opacity: 0.9;
      }
      h2 {
        color: ${({ theme }) => theme.backgroundLight};
        font-weight: 300;
        font-size: 1rem;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => darken(0.13, theme.background)};
      opacity: 0.7;
      transition: 0.4s;
    }
  }
`;
