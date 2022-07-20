/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/person.webp';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img
        src={picture}
        alt="Foto animada de uma mulher sentada em frente a um computador, no qual a tela do computador contém dois ícones: ícone do Typescript, azul e o ícone do Javascript, amarelo. Créditos: Drawkit"
      />

      <div>
        <TextContainer>
          <h1>Olá,</h1>
          <h2>me chamo Beatriz!</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">// Minha apresentação</span>
            <span className="gray">Infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue">Beatriz,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Dobruski</span>
            </div>
            {'\u007d'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="gray">Cargo</span> {'\u007b'}
            <div>
              Função: <span className="blue">Desenvolvedora Front-end</span>
            </div>
            <div>
              Tecnologias: <span className="blue">React, Typescript</span>
            </div>
            {'\u007d'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
