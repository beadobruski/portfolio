import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  img {
    position: absolute;
    z-index: -1;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-weight: 500;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.secondary};

    transition: color 0.2s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.05, props.theme.primary)
          : lighten(0.2, props.theme.secondary)}
  }
`;
