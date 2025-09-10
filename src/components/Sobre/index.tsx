import Image from "next/image";
import { Container } from "../Container";

export function Sobre() {
  return (
    <Container>
      <div
        id="sobre"
        className="flex mt-35 mb-10 2xl:justify-between 2xl:gap-20 2xl:mt-0 2xl:py-22"
      >
        <div className="hidden 2xl:block bg-blue rounded-full">
          <Image
            src="/boneco-sobre.svg"
            alt="Equipe especializada em elétrica e refrigeração da Voltagem"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col gap-5 2xl:w-1/2">
          <h2 className="title-section">Sobre Nós</h2>
          <p className="text-blue font-light 2xl:text-lg">
            A <strong>Voltagem</strong> é uma empresa especializada em{" "}
            <strong>manutenção elétrica</strong> e{" "}
            <strong>refrigeração residencial e comercial</strong>. Há mais de 8
            anos no mercado, oferecemos serviços de instalação, reparo e
            manutenção de <strong>ar-condicionado, geladeiras, freezers</strong>{" "}
            e sistemas elétricos completos.
          </p>
          <p className="text-blue font-light 2xl:text-lg">
            Nosso compromisso é garantir atendimento rápido, segurança em cada
            projeto e a satisfação de nossos clientes. Atuamos em{" "}
            <strong>Toda Grande Vitoria e região</strong>, sempre com profissionais
            qualificados e equipamentos modernos.
          </p>

          <div className="flex gap-10 w-full justify-between mt-2">
            <div className="numbers">
              <strong>8+</strong>
              <small>
                anos de <br /> experiência
              </small>
            </div>
            <div className="numbers">
              <strong>1000+</strong>
              <small>
                projetos <br /> entregues
              </small>
            </div>
            <div className="numbers">
              <strong>799+</strong>
              <small>
                clientes <br /> satisfeitos
              </small>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
