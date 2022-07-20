import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Head from 'next/head';
import { getPrismicClient } from '../services/prismic';

import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Social } from '../components/Social';
import { Projects } from '../components/Projects';
import { Knowledge } from '../components/Knowledge';

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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Portfólio</title>

        <meta
          name="description"
          content="Me chamo Beatriz Dobruski. Sou uma desenvolvedora Front-end, estudo há mais de um ano e faço faculdade de Análise e Desenvolvimento de Sistemas, 4 período. Tenho experiências com projetos pessoais em React, Typescript, styled-components, entre outros, nos quais você pode conferir no meu Github e aqui nesse portfólio!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Me chamo Beatriz Dobruski. Sou uma desenvolvedora Front-end, estudo há mais de um ano e faço faculdade de Análise e Desenvolvimento de Sistemas, 4 período. Tenho experiências com projetos pessoais em React, Typescript, styled-components, entre outros, nos quais você pode conferir no meu Github e aqui nesse portfólio!"
        />
      </Head>

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
