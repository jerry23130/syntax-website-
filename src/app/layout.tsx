import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntax Software Solutions - Expert Software Development",
  description:
    "We help startups and enterprises build scalable, high-performance software solutions using modern technologies.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "cloud",
    "DevOps",
    "TypeScript",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Syntax Software Solutions",
    description:
      "Expert software development for modern businesses. Custom software, mobile apps, cloud and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${manrope.variable} ${jetBrainsMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
