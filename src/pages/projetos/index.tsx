import { Header } from '../../components/Header';
import { ProjectPageItem } from '../../components/ProjectPageItem';
import picture from '../../assets/beadev.png';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projetos() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectPageItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://capitalist.com.br/wp-content/uploads/2020/09/limite-nubank.jpg"
        />
        <ProjectPageItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://capitalist.com.br/wp-content/uploads/2020/09/limite-nubank.jpg"
        />
        <ProjectPageItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://capitalist.com.br/wp-content/uploads/2020/09/limite-nubank.jpg"
        />
      </main>

      <img src={picture} alt="" />
    </ProjectsContainer>
  );
}
