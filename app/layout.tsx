import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Bryan Villalobos | Sitio Oficial',description:'Música, videos, agenda y contrataciones de Bryan Villalobos.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
