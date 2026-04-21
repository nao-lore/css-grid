import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "CSS Grid Generator - Visual Grid Layout Builder | css-grid",
  description:
    "Free online CSS Grid generator. Visually build grid layouts with configurable columns, rows, gaps, and template areas. Copy production-ready CSS instantly.",
  keywords: [
    "css grid generator",
    "grid layout builder",
    "css grid tool",
    "grid template",
    "css grid playground",
    "visual grid",
  ],
  authors: [{ name: "css-grid" }],
  openGraph: {
    title: "CSS Grid Generator - Visual Grid Layout Builder",
    description:
      "Free online tool to visually build CSS Grid layouts. Configure columns, rows, gaps, template areas, and copy production-ready CSS.",
    url: "https://css-grid.vercel.app",
    siteName: "css-grid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Grid Generator - Visual Grid Layout Builder",
    description:
      "Free online tool to visually build CSS Grid layouts. Configure columns, rows, gaps, template areas, and copy production-ready CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://css-grid.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CSS Grid Generator",
              description:
                "Free online CSS Grid generator. Visually build grid layouts with configurable columns, rows, gaps, and template areas. Copy production-ready CSS instantly.",
              url: "https://css-grid.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Visual grid layout builder",
                "Configurable columns and rows with fr, px, auto units",
                "Gap control (row-gap, column-gap)",
                "Grid template areas editor",
                "Cell span configuration",
                "One-click CSS copy",
                "Layout presets (Holy Grail, Dashboard, Gallery, Sidebar)",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
