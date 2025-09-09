import type { Metadata } from "next";
import "./globals.css";
import { Header, Menu, LenisProvider, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Brastenfrios - Serviços de Elétrica e Refrigeração na Grande Vitória",
  description:
    "Atendimento em Vila Velha, Vitória, Cariacica, Serra e região metropolitana. Instalação, manutenção e reparos elétricos e de refrigeração.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LenisProvider />
        <Header />
        <Menu />
        <main>
         {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
