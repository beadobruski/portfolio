import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 50%;
  margin: 0 auto;
  border-radius: 0.8rem;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  > section {
    z-index: 2;
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.backgroundLight};
      font-size: 2rem;
      font-weight: 300;
    }
  }

  > div.overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradientReverse};
    opacity: 0.7;
    transition: 0.5s;
    border-radius: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 14rem;

    > section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
