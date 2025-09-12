"use client";
import { Container } from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { DefaultButton } from "../DefaultButton";
import { motion } from "framer-motion";
import { FloatingH2 } from "../FloatingH2";

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
          spaceBetween: 24,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className="h-auto overflow-visible">
          <div
            className="group flex flex-col justify-between h-full min-h-[300px] 
  rounded-[20px] bg-[rgba(212,212,212,0)] backdrop-blur-[4px] 
  border border-white/10
  shadow-[0_6px_16px_rgba(0,0,0,0.25),-6px_12px_20px_rgba(255,255,255,0.2)_inset,3px_3px_20px_rgba(58,58,58,0.08)_inset] 
  p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)] my-10 mx-3"
          >
            {/* Top Row: Title left + Icon right */}
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-blue font-bold text-[22px]  max-w-[70%]">
                {card.title}
              </h4>
              <Image
                src={card.icon}
                alt={`Ícone de ${card.title.toLowerCase()}`}
                width={55}
                height={55}
                className="w-15 h-15 shrink-0"
              />
            </div>

            {/* Description */}
            <p className="text-darkBlue text-sm leading-relaxed flex-1">
              {card.desc}
            </p>

            {/* Button */}
            <div className="mt-3">
              <DefaultButton size="sm" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function Servicos() {
  return (
    <Container>
      <div
        id="serviços"
        className="flex flex-col py-10 gap-10 overflow-visible"
      >
        <div className="relative">
          <FloatingH2 amplitude={20} speed={1}>
            Serviços
          </FloatingH2>
          <h3 className="text-orange font-bold text-3xl mb-4">Refrigeração</h3>
          <CardsCarousel cards={cardsRefrigeracao} />
        </div>

        <div className="relative">
          <FloatingH2 amplitude={20} speed={1}>
            Serviços
          </FloatingH2>
          <h3 className="text-orange font-bold text-3xl mb-4">Elétrica</h3>
          <CardsCarousel cards={cardsEletrica} />
        </div>
      </div>
    </Container>
  );
}
