import "@/tokens/index.scss";
import "@/styles/index.scss";

import classNames from "classnames";
import { headers } from "next/headers";
import { Metadata } from "next";

import { site, schema, social } from "@/lib/config/site";
import { Background, Column, Flex, ToastProvider } from "@/components";

import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

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

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

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
    <Flex
      as="html"
      lang="en"
      fillHeight
      background="page"
      data-theme={site.theme ?? "light"}
      className={classNames(
        primary.variable,
        code.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
      )}
    >
      <ToastProvider>
        <Column as="body" fillWidth  margin="0" padding="0">
          <Background
            position="absolute"
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            gradient={{
              display: true,
              x: 100,
              y: 60,
              width: 70,
              height: 50,
              tilt: -40,
              opacity: 90,
              colorStart: "accent-background-strong",
              colorEnd: "page-background",
            }}
            grid={{
              display: true,
              opacity: 100,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          {children}
        </Column>
      </ToastProvider>
    </Flex>
  );
}
