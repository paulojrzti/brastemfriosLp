"use client";
import { Container } from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cardsRefrigeracao = [
  {
    icon: "/icons/ar.svg",
    title: "Instalação de Ar-Condicionado",
    desc: "Instalação de ar-condicionado split e sistemas de climatização para residências e empresas.",
  },
  {
    icon: "/icons/manutencao-limpeza.svg",
    title: "Manutenção e Limpeza",
    desc: "Higienização e manutenção preventiva para maior durabilidade e economia de energia.",
  },
  {
    icon: "/icons/reparos.svg",
    title: "Reparos em Equipamentos",
    desc: "Diagnóstico rápido e reparo confiável em aparelhos de refrigeração.",
  },
  {
    icon: "/icons/refrigeracao.svg",
    title: "Refrigeração Comercial e Industrial",
    desc: "Soluções de grande porte em refrigeração comercial e industrial com performance garantida.",
  },
];

const cardsEletrica = [
  {
    icon: "/icons/instalacao.svg",
    title: "Instalação Elétrica",
    desc: "Projetos elétricos residenciais e comerciais com segurança e eficiência.",
  },
  {
    icon: "/icons/manutencao-eletrica.svg",
    title: "Manutenção Elétrica",
    desc: "Correção de falhas e manutenção preventiva para maior confiabilidade.",
  },
  {
    icon: "/icons/reparos-sistemas.svg",
    title: "Reparos em Sistemas",
    desc: "Diagnóstico ágil e reparos em sistemas elétricos residenciais e industriais.",
  },
  {
    icon: "/icons/projetos.svg",
    title: "Projetos Industriais",
    desc: "Infraestrutura elétrica de alta performance para empresas e indústrias.",
  },
];

function CardsCarousel({
  cards,
}: {
  cards: { title: string; desc: string; icon: string }[];
}) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      className="pb-12"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="bg-blue rounded-2xl py-7 px-5 flex flex-col justify-between text-light h-73">
            <div>
              <img
                src={card.icon}
                alt={`Ícone de ${card.title.toLowerCase()}`}
                className="w-20 h-20 mb-3"
              />
              <h4 className="font-bold text-lg">{card.title}</h4>
              <p className="text-sm mt-2">{card.desc}</p>
            </div>
            <button className="mt-4 bg-orange text-light px-4 py-2 rounded-full font-semibold">
              Solicitar Orçamento
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function Servicos() {
  return (
    <Container>
      <div id="serviços" className="flex flex-col py-10 gap-10">
        <h2 className="title-section">Serviços</h2>

        <div>
          <h3 className="text-orange font-bold text-3xl mb-4">Refrigeração</h3>
          <CardsCarousel cards={cardsRefrigeracao} />
        </div>

        <div>
          <h3 className="text-orange font-bold text-3xl mb-4">Elétrica</h3>
          <CardsCarousel cards={cardsEletrica} />
        </div>
      </div>
    </Container>
  );
}
