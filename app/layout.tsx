import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://real-estate-broker-landing-page.vercel.app"),
  alternates: {
    canonical: "https://real-estate-broker-landing-page.vercel.app",
  },
  title: "Sobha Realty Brokers | Your Gateway to Dream Properties",
  description:
    "Sobha Realty Brokers is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
  keywords: [
    "Sobha Realty Brokers",
    "Luxury Properties",
    "Dubai Real Estate",
    "Apartments for Sale",
    "Villas for Sale",
    "Property Investment",
    "Real Estate Agency",
    "Luxury Homes",
    "Dubai Properties",
    "Real Estate Listings",
  ],
  authors: [{ name: "Sobha Realty Brokers" }],
  creator: "Sobha Realty Brokers",
  publisher: "Sobha Realty Brokers",

  openGraph: {
    title: "Sobha Realty Brokers | Luxury Properties in Dubai",
    description:
      "Sobha Realty Brokers is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
    url: "https://real-estate-broker-landing-page.vercel.app",
    siteName: "Sobha Realty Brokers",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/common/image.jpg",
        width: 1200,
        height: 630,
        alt: "Sobha Realty Brokers | Luxury Properties in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Realty Brokers | Luxury Properties in Dubai",
    description:
      "Sobha Realty Brokers is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
    images: ["/assets/common/image.jpg"],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
