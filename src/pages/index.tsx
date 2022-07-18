import { HomeContainer } from '../styles/HomeStyles';

import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Social } from '../components/Social';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Social />
      </main>
    </HomeContainer>
  );
}
