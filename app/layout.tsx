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
  title: "DAMAC Properties | Luxury Properties in Dubai",
  description:
    "DAMAC Properties is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
  keywords: [
    "DAMAC Properties",
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
  authors: [{ name: "DAMAC Properties" }],
  creator: "DAMAC Properties",
  publisher: "DAMAC Properties",

  openGraph: {
    title: "DAMAC Properties | Luxury Properties in Dubai",
    description:
      "DAMAC is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
    url: "https://real-estate-broker-landing-page.vercel.app",
    siteName: "DAMAC Properties",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/common/image.jpg",
        width: 1200,
        height: 630,
        alt: "DAMAC Properties | Luxury Properties in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DAMAC Properties | Luxury Properties in Dubai",
    description:
      "DAMAC is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
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
