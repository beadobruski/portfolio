import NavLink from './NavLink';
import { Container } from './styles';
import upImage from '../../assets/up-image.webp';

export function Header() {
  return (
    <Container>
      <img src={upImage} alt="" />
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </Container>
  );
}
