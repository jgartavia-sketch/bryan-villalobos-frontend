'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import {
  events,
  services,
  spotifyUrl,
  youtubeSlides,
  youtubeUploadsPlaylist,
  youtubeUrl,
} from '@/data/content';

const spotifyEmbed =
  'https://open.spotify.com/embed/artist/0LGyTlMHKfYkXmQ2xr4I3z?utm_source=generator&theme=0';

const WHATSAPP_NUMBER = '50688818279';

export function Music() {
  return (
    <section className="section music" id="musica">
      <div className="sectionHead">
        <p>01 — MÚSICA</p>
        <h2>
          Escucha.<br />
          <em>Siente.</em> Repite.
        </h2>
      </div>

      <div className="musicIntro">
        <p className="copy">
          El catálogo oficial de Bryan, integrado directamente en su casa
          digital. La música primero; las plataformas, a un clic.
        </p>
        <a className="textLink" href={spotifyUrl} target="_blank" rel="noreferrer">
          ABRIR PERFIL EN SPOTIFY ↗
        </a>
      </div>

      <div className="embedShell spotifyShell spotifyFull">
        <iframe
          className="spotify spotifyLarge"
          src={spotifyEmbed}
          width="100%"
          height="600"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Bryan Villalobos en Spotify"
        />
      </div>
    </section>
  );
}

export function Videos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.youtubeCard');
    const distance = card ? card.offsetWidth + 22 : track.clientWidth * 0.82;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  return (
    <section className="section videoSection" id="videos">
      <div className="videoGlow videoGlowOne" />
      <div className="videoGlow videoGlowTwo" />

      <div className="sectionHead videoHeading">
        <div>
          <p>02 — VIDEO</p>
          <h2>
            Míralo. Escúchalo.
            <br />
            <em>Vívelo.</em>
          </h2>
        </div>
        <div className="carouselControls">
          <button className="carouselButton" type="button" onClick={() => move(-1)} aria-label="Videos anteriores">←</button>
          <button className="carouselButton" type="button" onClick={() => move(1)} aria-label="Videos siguientes">→</button>
        </div>
      </div>

      <div className="youtubeIntro">
        <p className="copy">
          Presentaciones reproducibles directamente desde el canal oficial.
          Desliza, elige y dale play sin abandonar el sitio.
        </p>
        <a className="metalButton" href={youtubeUrl} target="_blank" rel="noreferrer">
          VER CANAL COMPLETO ↗
        </a>
      </div>

      <div className="youtubeTrack" ref={trackRef}>
        {youtubeSlides.map((video) => (
          <article className="youtubeCard" key={video.index}>
            <div className="youtubeFrameShell">
              <iframe
                className="youtubeFrame"
                src={`https://www.youtube.com/embed/videoseries?list=${youtubeUploadsPlaylist}&index=${video.index}&rel=0`}
                title={`Bryan Villalobos — ${video.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="youtubeMeta">
              <span>{String(video.index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{video.title}</strong>
                <p>Canal oficial · Bryan Villalobos</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="swipeHint">← DESLIZA PARA EXPLORAR →</div>
    </section>
  );
}

export function Services() {
  const [selected, setSelected] = useState<string[]>([]);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const toggleService = (title: string) => {
    setSelected((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  return (
    <section className="section servicesSection" id="servicios">
      <div className="sectionHead">
        <p>03 — CONTRATACIONES</p>
        <h2>
          Una voz.
          <br />
          <em>Diferentes experiencias.</em>
        </h2>
      </div>

      <p className="selectionHelp">
        Selecciona una o varias modalidades y solicita una cotización personalizada.
      </p>

      <div className="cards selectableCards">
        {services.map((service, index) => {
          const active = selected.includes(service.title);
          return (
            <button
              className={`card selectableCard ${active ? 'selected' : ''}`}
              key={service.title}
              type="button"
              onClick={() => toggleService(service.title)}
              aria-pressed={active}
            >
              <div className="cardShine" />
              <div className="cardTop">
                <span>0{index + 1}</span>
                <span className="selectionMark">{active ? '✓ SELECCIONADO' : '+ SELECCIONAR'}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </button>
          );
        })}
      </div>

      <div className="quoteBar">
        <div>
          <strong>
            {selected.length
              ? `${selected.length} modalidad${selected.length > 1 ? 'es' : ''} seleccionada${selected.length > 1 ? 's' : ''}`
              : 'Elige el formato que necesitas'}
          </strong>
          <p>La solicitud se preparará y enviará directamente por WhatsApp.</p>
        </div>
        <button
          className="primary quoteButton"
          type="button"
          disabled={!selected.length}
          onClick={() => setQuoteOpen(true)}
        >
          COTIZAR POR WHATSAPP
        </button>
      </div>

      <p className="note">* Modalidades sujetas a confirmación final del artista.</p>

      {quoteOpen && (
        <QuoteModal
          selectedServices={selected}
          onClose={() => setQuoteOpen(false)}
        />
      )}
    </section>
  );
}

function QuoteModal({
  selectedServices,
  onClose,
}: {
  selectedServices: string[];
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      'Hola Bryan, quisiera solicitar una cotización desde tu sitio web.',
      '',
      '*SOLICITUD DE COTIZACIÓN*',
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Fecha propuesta: ${date}`,
      `Lugar: ${location || 'Por definir'}`,
      '',
      '*Modalidad(es) de interés:*',
      ...selectedServices.map((service) => `• ${service}`),
      '',
      `Detalles adicionales: ${details || 'Sin detalles adicionales'}`,
      '',
      'Quedo atento(a) a disponibilidad y propuesta. Gracias.',
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="modalBackdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="quoteModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modalClose" type="button" onClick={onClose} aria-label="Cerrar formulario">
          ×
        </button>

        <p className="eyebrow">SOLICITUD DE CONTRATACIÓN</p>
        <h3 id="quote-title">Cuéntanos sobre tu evento.</h3>
        <p className="modalLead">
          Completa los datos y WhatsApp abrirá el mensaje ya armado para enviarlo.
        </p>

        <div className="selectedServicesSummary">
          <strong>MODALIDADES SELECCIONADAS</strong>
          <div className="selectedPills">
            {selectedServices.map((service) => (
              <span key={service}>✓ {service}</span>
            ))}
          </div>
        </div>

        <form className="quoteForm" onSubmit={submit}>
          <label>
            Nombre *
            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tu nombre" />
          </label>

          <label>
            WhatsApp / teléfono *
            <input value={phone} onChange={(e) => setPhone(e.target.value)} required inputMode="tel" placeholder="Tu número" />
          </label>

          <label className="fullField">
            Fecha propuesta *
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>

          <label className="fullField">
            Lugar del evento
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ciudad, salón o ubicación" />
          </label>

          <label className="fullField">
            Detalles adicionales
            <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} placeholder="Horario aproximado, cantidad de personas, ocasión..." />
          </label>

          <button className="primary submitQuote" type="submit">
            CONTINUAR A WHATSAPP ↗
          </button>
        </form>
      </div>
    </div>
  );
}

export function Agenda() {
  const weekdays = useMemo(
    () => [
      { day: 'LUN', label: 'Lunes', status: 'Consultar' },
      { day: 'MAR', label: 'Martes', status: 'Consultar' },
      { day: 'MIÉ', label: 'Miércoles', status: 'Consultar' },
      { day: 'JUE', label: 'Jueves', status: 'Consultar' },
      { day: 'VIE', label: 'Viernes', status: 'Consultar' },
    ],
    []
  );

  return (
    <section className="section agenda" id="agenda">
      <div className="sectionHead">
        <p>04 — AGENDA</p>
        <h2>
          Consulta su
          <br />
          <em>disponibilidad.</em>
        </h2>
      </div>

      <div className="agendaIntro">
        <div>
          <span className="liveDot" />
          <strong>AGENDA DEL ARTISTA</strong>
        </div>
        <p>
          Este calendario está preparado para mostrar las fechas reales disponibles
          y ocupadas de Bryan. Por ahora, consulta directamente antes de confirmar.
        </p>
      </div>

      <div className="calendarShell">
        <div className="calendarTop">
          <div>
            <span>DISPONIBILIDAD SEMANAL</span>
            <h3>Lunes — Viernes</h3>
          </div>
          <span className="calendarLegend"><i /> Disponible / por confirmar</span>
        </div>

        <div className="weekGrid">
          {weekdays.map((item) => (
            <div
              className="dayCard"
              key={item.day}
              title={`${item.label} — disponibilidad por confirmar`}
            >
              <span>{item.day}</span>
              <strong>{item.label}</strong>
              <div className="availability">
                <i />
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="eventList agendaEvents">
        {events.map((event) => (
          <div className="event" key={`${event.date}-${event.place}`}>
            <strong>{event.date}</strong>
            <div>
              <h3>{event.place}</h3>
              <p>{event.city}</p>
            </div>
            <span>{event.kind}</span>
            <a href="#servicios">CONSULTAR →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section className="story" id="historia">
      <div className="storyImg" />
      <div className="storyText">
        <p className="eyebrow">05 — HISTORIA</p>
        <h2>Música que se convirtió en <em>camino.</em></h2>
        <p>
          La trayectoria de Bryan Villalobos se construye entre escenarios,
          canciones y la conexión directa con el público. Cantante, músico y
          compositor costarricense, su propuesta une interpretación, sensibilidad y oficio.
        </p>
        <p>
          Este espacio está preparado para contar su historia oficial con profundidad:
          los comienzos, las influencias, los escenarios y las canciones que marcaron cada etapa.
        </p>
        <small>Biografía editorial en preparación con información oficial del artista.</small>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contactMetal" />
      <div className="contactInner">
        <p className="eyebrow">06 — BOOKING & CONTACTO</p>
        <h2>
          Hagamos que la próxima
          <br />
          noche sea <em>inolvidable.</em>
        </h2>
        <p>Contrataciones, eventos, colaboraciones y propuestas profesionales.</p>
        <a className="metalButton metalButtonLight contactQuoteButton" href="#servicios">
          COTIZAR UNA PRESENTACIÓN
        </a>
      </div>
    </section>
  );
}