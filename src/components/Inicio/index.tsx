import { Container, DefaultButton } from "@/components";
import Image from "next/image";

export function Inicio() {
  return (
    <Container>
      <div
        className="inicio hidden h-full 2xl:py-25 py-10 2xl:flex flex-col-reverse 2xl:flex-row items-center 2xl:justify-between justify-center"
        id="inicio"
      >
        <div className="flex flex-col 2xl:gap-6 gap-3 items-center 2xl:items-start">
          <h1 className="2xl:text-6xl text-2xl font-bold text-blue leading-snug text-center 2xl:text-left">
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
        </div>
        <div className="bg-blue rounded-full shadow-lg px-5">
          <Image
            src="/boneco-inicio.svg"
            alt="eletricista  brastenfrio"
            width={500}
            height={500}
            priority
            fetchPriority="high"
          />
        </div>
      </div>

      {/* versão mobile */}
      <div
        className="2xl:hidden relative inicio h-full 2xl:py-25 py-10 flex flex-col 2xl:flex-row items-center 2xl:justify-between justify-center"
        id="inicio"
      >
        <div className="bg-orange rounded-full shadow-lg">
          <Image
            src="/boneco-inicio.svg"
            alt="eletricista  brastenfrio"
            width={290}
            height={270}
            priority
            fetchPriority="high"
          />
        </div>
        <div className="bg-light h-33 bottom-0 w-full absolute blur-lg z-1"></div>
        <div className="flex flex-col 2xl:gap-6 gap-3 items-center 2xl:items-start z-50 absolute left-0 -bottom-20">
          <h1 className="2xl:text-6xl text-2xl font-bold text-blue leading-snug text-center 2xl:text-left">
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
        </div>
      </div>
    </Container>
  );
}
