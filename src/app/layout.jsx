import localFont from "next/font/local";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Plataforma de Eventos",
  description: "Plataforma de Eventos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}
