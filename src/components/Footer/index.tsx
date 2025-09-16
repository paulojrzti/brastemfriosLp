import { Container, DefaultButton, DefaultForm } from "@/components";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contato" className="bg-blue text-light py-20 mt-10">
      <Container>
        <div className="flex justify-between h-full items-start flex-wrap gap-10">
          {/* Logo + Redes */}
          <div className="flex flex-col h-full justify-between">
            <Image
              src="/logo-branca.svg"
              alt="Logo da Voltagem - serviços de elétrica e refrigeração"
              width={150}
              height={150}
            />

            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/voltagemrefrigeracao_es/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-glass"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://wa.link/jcltng"
                target="_blank"
                rel="noopener noreferrer"
                className="social-glass"
              >
                <Image
                  src="/telefone-or.svg"
                  alt="Telefone"
                  width={20}
                  height={20}
                />
              </a>
              <a href="" className="social-glass">
                <Image src="/email-or.svg" alt="Email" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Mini descrição SEO */}
          <div className="text-sm text-light/80 max-w-sm">
            <h4
              className="relative inline-block font-bold text-white 
               after:content-[''] after:block after:w-full after:h-1 after:bg-orange 
               after:mx-auto after:mt-1 text-2xl mb-5 after:rounded-full after:left-0"
            >
              Sobre
            </h4>
            <p>
              A <strong>Voltagem</strong> é especializada em{" "}
              <strong>serviços de elétrica</strong> e{" "}
              <strong>refrigeração residencial, comercial e industrial</strong>.
              Atendemos com instalação, manutenção, reparos e projetos sob
              medida em toda a região da
              <strong> Grande Vitória - ES </strong>.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4
              className="relative inline-block font-bold text-white 
               after:content-[''] after:block after:w-full after:h-1 after:bg-orange 
               after:mx-auto after:mt-1 text-2xl mb-5 after:rounded-full after:left-0"
            >
              Menu
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="footer-menu-item">
                <a href="#inicio">Início</a>
              </li>
              <li className="footer-menu-item">
                <a href="#sobre">Sobre</a>
              </li>
              <li className="footer-menu-item">
                <a href="#serviços">Serviços</a>
              </li>
              <li className="footer-menu-item">
                <a href="#portfolio">Portfólio</a>
              </li>
              <li className="footer-menu-item">
                <a
                  href="https://wa.link/jcltng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Form com efeito Liquid Glass */}
          <DefaultForm />
        </div>

        {/* Copyright */}
        <div className="border-t border-[#4982CF] text-[#4982CF] mt-10 pt-5 flex justify-between text-sm flex-wrap">
          <p>
            Feito por{" "}
            <a href="" className="text-orange cursor-pointer">
              @paulojrzti
            </a>
          </p>
          <a href="" className="cursor-pointer">
            Todos os direitos reservados,{" "}
            <span className="text-orange">Copyright © 2025</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
