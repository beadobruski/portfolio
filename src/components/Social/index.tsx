import { SectionTitle } from '../SectionTitle';
import { SocialItem } from './SocialItem';
import { Container } from './styles';

export function Social() {
  return (
    <Container>
      <SectionTitle title="Redes sociais" description=" let's talk!" />

      <section>
        <SocialItem
          social="LinkedIn"
          title="beatrizdobruski/"
          description="No meu LinkedIn sempre estou postando projetos pessoais no qual estou trabalhando no momento atual!"
          link="https://www.linkedin.com/in/beatrizdobruski/"
        />
        <SocialItem
          social="Discord"
          title="beazi#7708"
          description="Quer conversar sobre algum projeto ou propostas? Me manda uma mensagem no Discord!"
          link="https://linktr.ee/beadobruski"
        />

        <SocialItem
          social="GitHub"
          title="beadobruski/"
          description="Todos meus projetos pessoais são encontrados, códigos e ferramentas que já utilizei alguma vez como dev."
          link="https://github.com/beadobruski/"
        />
      </section>
    </Container>
  );
}
