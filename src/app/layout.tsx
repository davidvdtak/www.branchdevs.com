import "@/styles/globals.css";
import { site, schema, social } from "@/config/site";

import { headers } from "next/headers";
import { Metadata } from "next";

import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": schema.type,
    url: "https://" + site.url,
    logo: schema.logo,
    name: schema.name,
    description: schema.description,
    email: schema.email,
    sameAs: Object.values(social).filter(Boolean),
  };

  return {
    title: site.name,
    description: site.description,
    icons: [
    { rel: 'icon', url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
    { rel: 'icon', url: '/favicon-light.svg' }, // fallback
  ],
    openGraph: {
      title: site.name,
      description: site.description,
      url: "https://" + site.url,
      images: [
        {
          url: site.image,
          alt: site.name,
        },
      ],
      type: site.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: site.description,
      images: [site.image],
    },
    metadataBase,
    // Inject structured data using additionalHead tags:
    other: {
      head: [
        `<script type="application/ld+json">${JSON.stringify(schemaData)}</script>`,
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en" className={[primary.variable,code.variable].join(" ")}>
      <body>
        <div className="min-h-screen">          
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
