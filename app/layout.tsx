import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://yourdomain.com"; // Replace with your live Vercel/custom domain once deployed

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rose Sharon Anchi | Software Engineer & Full-Stack Developer",
    template: "%s | Rose Sharon Anchi",
  },
  description:
    "Official portfolio of Rose Sharon Anchi — Software Engineer based in Buea, Cameroon specializing in React.js, Next.js, Go, and high-performance web applications.",
  keywords: [
    "Rose Sharon",
    "Rose Sharon Anchi",
    "Rose Sharon Developer",
    "Rose Sharon Cameroon",
    "Frontend Developer Buea",
    "Full-Stack Developer Cameroon",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Buea",
  ],
  authors: [
    {
      name: "Rose Sharon Anchi",
      url: "https://www.linkedin.com/in/rose-sharon-anchi",
    },
  ],
  creator: "Rose Sharon Anchi",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rose Sharon Anchi | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in React.js, Next.js, Go, and responsive web application development.",
    siteName: "Rose Sharon Anchi Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rose Sharon Anchi - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rose Sharon Anchi | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in React.js, Next.js, Go, and responsive web application development.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Google Knowledge Graph & Social Verification
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rose Sharon Anchi",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/rose-sharon-anchi",
      "https://github.com/rosesharonanchi",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Software Developer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buea",
      addressCountry: "Cameroon",
    },
  };

  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}