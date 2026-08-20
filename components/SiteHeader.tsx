'use client';

import { useEffect, useState } from 'react';

const links = [
  ['Música', '#musica'],
  ['Videos', '#videos'],
  ['Contrataciones', '#servicios'],
  ['Agenda', '#agenda'],
  ['Historia', '#historia'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menuOpen', open);
    return () => document.body.classList.remove('menuOpen');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="siteHeader">
      <a className="brand" href="#inicio" onClick={close}>BRYAN <span>V.</span></a>

      <nav className="desktopNav" aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <a className="navCta desktopCta" href="#servicios">CONTRATAR</a>

      <button
        className={`hamburger ${open ? 'isOpen' : ''}`}
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      <div className={`mobileMenu ${open ? 'isOpen' : ''}`} aria-hidden={!open}>
        <div className="mobileMenuInner">
          <p>BRYAN VILLALOBOS</p>
          <nav>
            {links.map(([label, href], index) => (
              <a key={href} href={href} onClick={close}>
                <span>0{index + 1}</span>{label}
              </a>
            ))}
          </nav>
          <a className="primary mobileBooking" href="#servicios" onClick={close}>
            SOLICITAR CONTRATACIÓN
          </a>
        </div>
      </div>
    </header>
  );
}