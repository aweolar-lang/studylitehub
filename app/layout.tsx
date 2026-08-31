import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers/Providers"; 
import NavbarServer from "@/components/layout/NavbarServer";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

// 1. Typography
const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// 2. Viewport & Theme Settings
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" } // Zinc-950 for dark mode
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false, // Prevents layout breaks on mobile input focus
};

// 3. SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://studylite.online" || "https://studyhub.localsoko.com"),
  applicationName: "StudyHub", // Tells Google the exact App Name for Search Results
  title: {
    default: "StudyHub | The Global Academic Ecosystem",
    template: "%s | StudyHub",
  },
  description: "The global nexus for ambitious learners, elite educators, and pioneering researchers. Master your curriculum and publish groundbreaking research.",
  keywords: ["academic ecosystem", "verified tutors", "research publications", "online assessments", "study guides"],
  authors: [{ name: "StudyHub Inc.", url: "https://studylite.online/about" }],
  creator: "StudyHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "StudyHub",
    title: "StudyHub | The Global Academic Ecosystem",
    description: "Where intellect meets limitless opportunity. Join the global academic nexus.",
    images: [{
      url: "/og-image.jpg", 
      width: 1200,
      height: 630,
      alt: "StudyHub Dashboard Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyHub | The Global Academic Ecosystem",
    description: "Where intellect meets limitless opportunity.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 4. Schema.org JSON-LD (Critical for Google Search Site Name & Search Box)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "StudyHub by Localsoko",
    "url": "https://studylite.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://studylite.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    // suppressHydrationWarning is required by next-themes to prevent mismatch errors
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100`}>
        {/* Providers wrapper handles Theme, Auth Context, React Query, etc. */}
        <Providers>
          <NavbarServer />
          <main className="flex-1 flex flex-col relative w-full isolate min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster /> {/* Global Toast notifications */}
        </Providers>
      </body>
    </html>
  );
}