import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultímos projetos" />
      <section>
        <ProjectItem
          title="Projeto 01"
          image="https://clickpetroleoegas.com.br/wp-content/uploads/2021/06/natureza-na-construcao-civil.jpg"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 02"
          image="https://clickpetroleoegas.com.br/wp-content/uploads/2021/06/natureza-na-construcao-civil.jpg"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 03"
          image="https://clickpetroleoegas.com.br/wp-content/uploads/2021/06/natureza-na-construcao-civil.jpg"
          type="Website"
          slug="teste"
        />
      </section>

      <button type="button">
        <Link href="/projects">
          <a>ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
