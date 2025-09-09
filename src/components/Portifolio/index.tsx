import Image from "next/image";
import { Container } from "../Container";

type PortfolioProps = {
  images: string[];
};

export function Portfolio({ images }: PortfolioProps) {
  return (
    <Container>
      <section id="portfolio" className="py-20">
        <h2 className="title-section mb-10 text-center">Portfólio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative w-full aspect-square">
              <Image
                src={src}
                alt={`portfolio-${i}`}
                fill
                className="object-cover rounded-lg shadow"
                quality={70} 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
