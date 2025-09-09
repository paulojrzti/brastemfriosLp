// src/app/page.tsx
import fs from "fs";
import path from "path";
import { Inicio, Servicos, Sobre, Portfolio, Faq } from "@/components";

function getPortfolioImages() {
  const portfolioDir = path.join(process.cwd(), "public", "portfolio");
  const files = fs.readdirSync(portfolioDir);

  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  return files
    .filter((file) =>
      allowedExtensions.includes(path.extname(file).toLowerCase())
    )
    .map((file) => `/portfolio/${file}`);
}

export default function Home() {
  const images = getPortfolioImages(); 

  return (
    <>
      <Inicio />
      <Sobre />
      <Servicos />
      <Portfolio images={images} />
      <Faq/>
    </>
  );
}
