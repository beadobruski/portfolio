import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

import bottomPicture from '../../assets/beadev.webp';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle
        title="Conhecimentos"
        description="Tecnologias que uso no dia à dia!"
      />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Typescript" icon={<SiTypescript />} />
        <KnowledgeItem title="Javascript" icon={<SiJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
      </section>

      <img
        src={bottomPicture}
        alt="Imagem de uma mulher mostrando informações animadas."
      />
    </Container>
  );
}
