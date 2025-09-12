"use client";
import { Container, DefaultButton } from "@/components";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Inicio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <Container>
      {/* versão desktop */}
      <motion.div
        ref={ref}
        className="inicio hidden h-screen 2xl:py-25 py-15 mt-10 2xl:flex flex-col-reverse 2xl:flex-row items-center 2xl:justify-between justify-center"
        id="inicio"
      >
        <div className="flex flex-col 2xl:gap-6 gap-3 items-center 2xl:items-start">
          <motion.p
            style={{ opacity, y }}
            className="2xl:text-xl font-semibold text-orange uppercase text-center 2xl:text-left"
          >
            Atendimento rápido, profissionais qualificados e resultado
            garantido.
          </motion.p>
          <motion.h1
            style={{ opacity, y }}
            className="2xl:text-6xl text-2xl font-bold text-blue leading-snug text-center 2xl:text-left"
          >
            Refrigeração e elétrica <br /> com qualidade e confiança.
          </motion.h1>
          <motion.div style={{ opacity, y }} className="hidden 2xl:flex">
            <DefaultButton size="xl" />
          </motion.div>
          <div className="2xl:hidden">
            <DefaultButton size="sm" />
          </div>
        </div>

        <motion.div
          style={{ opacity, y }}
          className="bg-blue rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25),15px_9px_22.3px_0_rgba(255,255,255,0.25)_inset] px-5"
        >
          <Image
            src="/boneco-inicio.svg"
            alt="eletricista voltagem"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </motion.div>

      {/* versão mobile */}
      <motion.div
        
        className="2xl:hidden relative inicio h-full 2xl:py-25 py-10 flex flex-col 2xl:flex-row items-center 2xl:justify-between justify-center mt-30"
        id="inicio"
      >
        <motion.div
          
          className="bg-orange rounded-full shadow-lg"
        >
          <Image
            src="/boneco-inicio.svg"
            alt="eletricista voltagem"
            width={290}
            height={270}
            priority
          />
        </motion.div>

        <div className="bg-light h-33 bottom-0 w-full absolute blur-lg z-1"></div>

        <motion.div
          className="flex flex-col 2xl:gap-6 gap-3 items-center 2xl:items-start z-20 absolute left-0 -bottom-20"
        >
          <h1 className="2xl:text-6xl text-[5.7vw] font-bold text-blue leading-snug text-center 2xl:text-left w-full">
            Refrigeração e elétrica <br /> com qualidade e confiança.
          </h1>
          <p className="2xl:text-xl text-orange 2xl:max-w-lg text-center 2xl:text-left">
            Atendimento rápido, profissionais qualificados e resultado
            garantido.
          </p>
          <div className="hidden 2xl:flex">
            <DefaultButton size="xl" />
          </div>
          <div className="2xl:hidden">
            <DefaultButton size="sm" />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
