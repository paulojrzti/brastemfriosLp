import Image from "next/image";
import { Container } from "@/components";
export function Header() {
  return (
    <Container>
      <div className="header flex 2xl:justify-between justify-center items-center 2xl:py-8 py-5 relative ">
        <div className="w-20 h-20 2xl:w-30 relative">
          <Image src="/logo.svg" alt="logo" fill className="object-contain" />
        </div>
        <div className="infos-container hidden md:flex 2xl:gap-20 gap-5 items-center">
          <a className="info link-hover flex gap-4 items-center cursor-pointer">
            <div className="icon">
              <Image src="/cidade.svg" alt="icone" width={25} height={25} />
            </div>
            <div className="text-info">
              <h6>Grande Vitoria - ES</h6>
              <p>Nós avalie</p>
            </div>
          </a>
          <a className="info link-hover flex gap-4 items-center cursor-pointer">
            <div className="icon">
              <Image src="/telefone.svg" alt="icone" width={25} height={25} />
            </div>
            <div className="text-info">
              <h6>Telefone</h6>
              <p>+55 (27) 9999-999</p>
            </div>
          </a>
          <a className="info link-hover flex gap-4 items-center cursor-pointer">
            <div className="icon">
              <Image src="/email.svg" alt="icone" width={25} height={25} />
            </div>
            <div className="text-info">
              <h6>Email</h6>
              <p>voltagemrefrigeracao@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="w-[200vw] absolute h-1 bg-blue -left-10 2xl:-left-40 bottom-0"></div>
      </div>
    </Container>
  );
}
