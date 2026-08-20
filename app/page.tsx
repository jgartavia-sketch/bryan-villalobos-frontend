import { Agenda, Contact, Music, Services, Story, Videos } from '@/components/Sections';
import { SiteHeader } from '@/components/SiteHeader';
import { spotifyUrl, youtubeUrl } from '@/data/content';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="inicio">
        <div className="heroPhoto" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">CANTANTE · MÚSICO · COMPOSITOR</p>
          <h1>BRYAN<br /><em>VILLALOBOS</em></h1>
          <p className="lead">Canciones, escenarios y una historia por contar.</p>

          <div className="actions">
            <a className="primary" href="#musica">ESCUCHAR MÚSICA ↘</a>
            <a className="ghost" href="#servicios">CONTRATAR</a>
          </div>

          <div className="social">
            <a href={spotifyUrl} target="_blank" rel="noreferrer">SPOTIFY</a>
            <span>•</span>
            <a href={youtubeUrl} target="_blank" rel="noreferrer">YOUTUBE</a>
          </div>
        </div>
        <span className="scroll">SCROLL ↓</span>
      </section>

      <Music />
      <Videos />
      <Services />
      <Agenda />
      <Story />
      <Contact />

      <footer className="siteFooter">
        <div className="footerIdentity">
          <strong>BRYAN <em>VILLALOBOS</em></strong>
          <p>Cantante · Músico · Compositor</p>
          <div className="footerLocation">
            <span className="crFlag" aria-label="Costa Rica">🇨🇷</span>
            <span>
              <b>Costa Rica</b>
              <small>Disponible para contrataciones</small>
            </span>
          </div>
        </div>

        <div className="footerColumn">
          <span className="footerLabel">EXPLORAR</span>
          <a href="#musica">Música</a>
          <a href="#videos">Videos</a>
          <a href="#agenda">Agenda</a>
          <a href="#historia">Historia</a>
        </div>

        <div className="footerColumn">
          <span className="footerLabel">CONTRATACIONES</span>
          <a href="#servicios">Modalidades</a>
          <a href="#servicios">Solicitar cotización</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footerColumn">
          <span className="footerLabel">ESCUCHAR & VER</span>
          <a href={spotifyUrl} target="_blank" rel="noreferrer">Spotify ↗</a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">YouTube ↗</a>
        </div>

        <div className="footerBottom">
          <span>© 2026 Bryan Villalobos</span>
          <span>Artista costarricense · Costa Rica 🇨🇷</span>
          <span>Sitio desarrollado por System Lab CR</span>
        </div>
      </footer>
    </main>
  );
}