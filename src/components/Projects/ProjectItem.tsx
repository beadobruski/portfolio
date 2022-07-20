import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  image: string;
}

export function ProjectItem({ title, type, slug, image }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={image}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
