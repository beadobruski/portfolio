import { ItemContainer } from './styles';

interface SocialProps {
  social: string;
  title: string;
  description?: string;
  link: string;
}

export function SocialItem({ social, title, description, link }: SocialProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{social}</h1>

        <h2>{title}</h2>

        <p>{description}</p>

        <button type="button">
          {' '}
          <a href={link} target="_blank" rel="noreferrer">
            {social}
          </a>
        </button>
      </div>
    </ItemContainer>
  );
}
