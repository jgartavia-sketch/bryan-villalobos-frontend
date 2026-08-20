export const spotifyUrl =
  'https://open.spotify.com/intl-es/artist/0LGyTlMHKfYkXmQ2xr4I3z?si=3bc3f88329ad42fb';

export const youtubeUrl =
  'https://www.youtube.com/channel/UCliykiygYQcR1iYTs7pdE_Q';

export const youtubeUploadsPlaylist = 'UUliykiygYQcR1iYTs7pdE_Q';

export const youtubeSlides = Array.from({ length: 10 }, (_, index) => ({
  index,
  title: index === 0 ? 'Último video del canal' : `Video ${index + 1} del canal`,
}));

export const services = [
  {
    title: 'Formato acústico',
    text: 'Una experiencia cercana de voz y guitarra para espacios íntimos y momentos especiales.',
  },
  {
    title: 'Eventos privados',
    text: 'Música en vivo adaptada al carácter de cada celebración.',
  },
  {
    title: 'Bodas',
    text: 'Una propuesta musical elegante para acompañar momentos que no se repiten.',
  },
  {
    title: 'Hoteles & restaurantes',
    text: 'Repertorio y formato pensados para elevar la experiencia del espacio.',
  },
  {
    title: 'Eventos corporativos',
    text: 'Presentaciones profesionales para marcas, empresas y encuentros especiales.',
  },
  {
    title: 'Producción & composición',
    text: 'Propuestas creativas y colaboraciones musicales sujetas a disponibilidad.',
  },
];

export const events = [
  {
    date: 'PRÓXIMAMENTE',
    place: 'Nuevas fechas públicas',
    city: 'Costa Rica',
    kind: 'Agenda en actualización',
  },
];