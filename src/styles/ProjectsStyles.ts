import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    position: absolute;
    bottom: 0;

    @media (max-width: 1000px) {
      width: 150%;
      left: -5rem;
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

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
`;
