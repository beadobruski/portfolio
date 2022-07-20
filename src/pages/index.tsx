import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { HomeContainer } from '../styles/HomeStyles';

import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Social } from '../components/Social';
import { Projects } from '../components/Projects';
import { Knowledge } from '../components/Knowledge';
import { getPrismicClient } from '../services/prismic';

interface IProjetos {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjetos[];
}

export default function Home({ projetos }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Social />
        <Projects projetos={projetos} />
        <Knowledge />
      </main>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
