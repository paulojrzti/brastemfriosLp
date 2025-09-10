import { Container } from "@/components";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contato" className="bg-blue text-light py-20 mt-10">
      <Container>
        <div className="flex justify-between h-full items-start flex-wrap gap-10">
          {/* Logo + Redes */}
          <div className="flex flex-col h-full justify-between ">
            <Image
              src="/logo-branca.svg"
              alt="Logo da Voltagem - serviços de elétrica e refrigeração"
              width={150}
              height={150}
            />
            {/* Mini descrição SEO */}
            <div className="mt-5 text-sm text-light/80 max-w-sm">
              <p>
                A <strong>Voltagem</strong> é especializada em{" "}
                <strong>serviços de elétrica</strong> e{" "}
                <strong>
                  refrigeração residencial, comercial e industrial
                </strong>
                . Atendemos com instalação, manutenção, reparos e projetos sob
                medida em toda a região da
                <strong> Grande Vitoria - ES </strong>.
              </p>
            </div>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/voltagemrefrigeracao_es/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media"
                aria-label="Instagram Voltagem"
              >
                <Image
                  src="/instagram.svg"
                  alt="Ícone do Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://wa.link/jcltng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/telefone-or.svg"
                  alt="Ícone de telefone"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="mailto:contato@voltagem.com"
                className="social-media"
                aria-label="Email Voltagem"
              >
                <Image
                  src="/email-or.svg"
                  alt="Ícone de email"
                  width={24}
                  height={24}
                />
              </a>
            </div>
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

          {/* Form */}
          <form action="submit" className="flex flex-col gap-4 w-full max-w-xs">
            <h4
              className="relative inline-block font-bold text-white w-max
               after:content-[''] after:block after:w-full after:h-1 after:bg-orange 
               after:mx-auto after:mt-1 text-2xl mb-5 after:rounded-full after:left-0"
            >
              Fale conosco
            </h4>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              aria-label="Nome"
              required
              className="bg-light text-orange rounded-md px-2 py-1 placeholder:text-orange placeholder:font-light"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              aria-label="Email"
              required
              className="bg-light rounded-md text-orange px-2 py-1 placeholder:text-orange placeholder:font-light"
            />
            <input
              type="tel"
              placeholder="Telefone"
              name="telefone"
              aria-label="Telefone"
              required
              className="bg-light rounded-md text-orange px-2 py-1 placeholder:text-orange placeholder:font-light"
            />
            <button
              className={`
        flex items-center w-max bg-orange text-light px-4 py-2 rounded-full font-semibold 
        hover:bg-darkOrange hover:shadow-amber-500 shadow-md mt-4
        transition-transform duration-200 ease-out
        transform hover:scale-105`}
            >
              Enviar
            </button>
          </form>
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
