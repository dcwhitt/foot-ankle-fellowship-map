import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Roboto({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "700"] });
const serif = Roboto_Condensed({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600", "700"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = "Foot & Ankle Fellowship Map";
  const description = "Explore 2026–2027 AOFAS-accredited orthopaedic foot and ankle fellowship programs across North America.";
  return {
    title, description,
    openGraph: { title, description, type: "website", images: [{ url: image, width: 1536, height: 1024, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
