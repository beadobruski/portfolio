import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

interface IProjetos {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projetos: IProjetos[];
}

export function Projects({ projetos }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Ultímos projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjectItem
            key={projeto.slug}
            title={projeto.title}
            image={projeto.thumbnail}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
