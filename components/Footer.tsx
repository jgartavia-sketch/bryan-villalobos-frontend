import { spotifyUrl, youtubeUrl } from '@/data/content';

const facebookUrl = 'https://www.facebook.com/share/1DgzAKri8R/';

export default function Footer() {
  return (
    <footer>
      <div>
        <strong>BRYAN VILLALOBOS</strong>
        <p>Cantante · Músico · Compositor</p>
      </div>

      <div className="footerLinks">
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
          <span className="socialIcon">●</span>
          Spotify ↗
        </a>

        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <span className="socialIcon">▶</span>
          YouTube ↗
        </a>

        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <span className="socialIcon socialFacebook">f</span>
          Facebook ↗
        </a>

        <a href="#contacto">Booking</a>
      </div>

      <p className="credit">
        © 2026 Bryan Villalobos · Experiencia digital preparada por System Lab CR
      </p>
    </footer>
  );
}