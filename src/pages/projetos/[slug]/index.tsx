import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPrismicClient } from '../../../services/prismic';

import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

import bottomImage from '../../../assets/projetos.webp';
import { LoadingScreen } from '../../../components/LoadingScreen';

interface IProjetos {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projeto: IProjetos;
}

export default function Projeto({ projeto }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Portfólio</title>

        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <img src={bottomImage} alt="" />
      <Header />
      <ProjectBanner
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p data-aos="fade-right">{projeto.description}</p>

        <button type="button">
          <a href={projeto.link} target="_blank" rel="noreferrer">
            Ver projeto no github
          </a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projetos')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
