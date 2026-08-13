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

export const metadata: Metadata = {
  title: {
    default: "Rose Sharon Anchi | Frontend & Full-Stack Developer",
    template: "%s | Rose Sharon Anchi",
  },
  description:
    "Official portfolio of Rose Sharon Anchi — Software Developer based in Buea, Cameroon specializing in React.js, Next.js, Go, and high-performance web applications.",
  keywords: [
    "Rose Sharon",
    "Rose Sharon Anchi",
    "Rose Sharon Developer",
    "Rose Sharon Cameroon",
    "Frontend Developer Buea",
    "Full-Stack Developer Cameroon",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: "Rose Sharon Anchi", url: "https://linkedin.com/in/rosesharonanchi" }],
  creator: "Rose Sharon Anchi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // Replace with your live portfolio URL once deployed
    title: "Rose Sharon Anchi | Frontend & Full-Stack Developer",
    description:
      "Software Developer specializing in React.js, Next.js, Go, and responsive web application development.",
    siteName: "Rose Sharon Anchi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rose Sharon Anchi | Frontend & Full-Stack Developer",
    description:
      "Software Developer specializing in React.js, Next.js, Go, and responsive web application development.",
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
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}