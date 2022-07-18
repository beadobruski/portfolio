/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/person.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="" />

      <div>
        <TextContainer>
          <h1>Olá,</h1>
          <h2>me chamo Beatriz!</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue">Beatriz,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Dobruski</span>
            </div>
            {'\u007d'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007b'}
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
