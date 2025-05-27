import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});



export const metadata: Metadata =  {
  title: "Azka Zufar Hanif | Full Stack Developer & Designer",
  keywords: [
    "Azka Zufar Hanif",
    "Full Stack Developer",
    "Designer",
    "Portfolio",
    "Web Developer",
    "UI/UX Designer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "TypeScript",
    "Software Engineer",
    "Web Design",
    "Web Development",
    "Frontend Developer"
  ],
  authors: [{ name: "Azka Zufar Hanif", url: "https://azka.dev" }],
  creator: "Azka Zufar Hanif",
  openGraph: {
    title: "Azka Zufar Hanif | Full Stack Developer & Designer",
    description: "Azka Zufar Hanif is a Full Stack Developer and Designer specializing in creating modern web applications.", 
    url: "https://azka.dev",
    siteName: "Azka Zufar Hanif | Full Stack Developer & Designer",
  },
  description: "Azka Zufar Hanif is a Full Stack Developer and Designer specializing in creating modern web applications.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
