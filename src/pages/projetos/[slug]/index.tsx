import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

import bottomImage from '../../../assets/projetos.png';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <img src={bottomImage} alt="" />
      <Header />
      <ProjectBanner
        title="Projeto 01"
        type="Website"
        imgUrl="https://i.ytimg.com/vi/vfEiBN2guhg/maxresdefault.jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
          debitis id, dolores excepturi voluptatibus provident consequatur
          tempore porro repellendus inventore repellat nostrum. Reiciendis ex
          ipsa itaque odit maiores optio, quisquam id aliquid ipsam quae quaerat
          possimus culpa, animi totam provident veritatis velit at quia! Tenetur
          nulla, vero, porro rerum qui, minus et architecto quisquam distinctio
          voluptate tempore id temporibus ex est hic exercitationem consequuntur
          aliquam enim. Voluptate reprehenderit quisquam accusantium doloremque,
          porro cum omnis consequatur necessitatibus dolore, iste eius.
        </p>

        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
