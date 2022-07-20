import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Baloo 2', 'Roboto', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }

  }

  body {
    background-color: #ceb9fa;
    opacity: 1;
    background-image: radial-gradient(circle at center center, #ffffff, #ceb9fa), repeating-radial-gradient(circle at center center, #ffffff, #ffffff, 35px, transparent 70px, transparent 35px);
    background-blend-mode: multiply;

    font: 400 1rem 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  img {
    width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;

    @media(max-width:1450px) {
      max-width: 70rem;
    }

    @media(max-width:1000px) {
      max-width: 50rem;
    }

    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }
`;
