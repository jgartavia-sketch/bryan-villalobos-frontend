import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryan Villalobos | Sitio Oficial",
  description:
    "Música, videos, agenda y contrataciones de Bryan Villalobos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQ3V45G38Y"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-ZQ3V45G38Y");
          `}
        </Script>
      </body>
    </html>
  );
}