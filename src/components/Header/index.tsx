import NavLink from './NavLink';
import { Container, Wrapper } from './styles';

import logoHeader from '../../assets/logo-header.png';

export function Header() {
  return (
    <Container>
      <img src={logoHeader} alt="" />
      <Wrapper>
        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/projetos" />
        </ul>
      </Wrapper>
    </Container>
  );
}
