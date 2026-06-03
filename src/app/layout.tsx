import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import { SITE } from "@/lib/config";
import { orgSchema, JsonLd } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const franklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/" },
  verification: { google: "GBJBMQ24mUKtA5vKVrcREvaNF2Ig4iUNM1OGlbNpEdI" },
  openGraph: { type: "website", siteName: SITE.name, title: `${SITE.name} — ${SITE.tagline}`, description: SITE.description, url: SITE.url },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${franklin.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6J8GBWMQ1G" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-6J8GBWMQ1G');` }} />
      </head>
      <body>
        <JsonLd data={orgSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
