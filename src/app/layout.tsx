import type { Metadata } from "next";
import "./globals.css";
import { Header, Menu, LenisProvider, Footer, WhatsAppButton } from "@/components";
import { Montserrat as FontMontserrat } from "next/font/google";

const montserrat = FontMontserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Voltagem - Serviços de Elétrica e Refrigeração na Grande Vitória",
  description:
    "Atendimento em Vila Velha, Vitória, Cariacica, Serra e região metropolitana. Instalação, manutenção e reparos elétricos e de refrigeração.",
  other: {
    "google-site-verification": "JDVMEekIXVLLcHVwgH5nj2vVb1qFOjA42Fx-EbuZukY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <LenisProvider />
        <Header />
        <Menu />
        <main>{children}</main>
        <WhatsAppButton
          phone="5527996151769"
          message="Olá, vim pelo site e gostaria de informações!"
        />
        <Footer />
      </body>
    </html>
  );
}
