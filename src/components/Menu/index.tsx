"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "../Container";
const sections = ["inicio", "sobre", "serviços", "portfolio", "faq"];

export function Menu() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.toLowerCase());
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 md:justify-between justify-center items-center py-3 bg-light shadow-lg border-b-2 border-blue z-50">
      <Container>
        <div className="flex flex-col 2xl:flex-row 2xl:justify-between justify-center items-center">
          <div className="w-20 h-20 2xl:w-30 relative">
            <Image src="/logo.svg" alt="logo" fill className="object-contain" />
          </div>
          <ul className="flex 2xl:gap-8 gap-5">
            {sections.map((item) => (
              <li key={item} className=" relative">
                <a
                target="blank"
                  href={`#${item}`}
                  className="font-semibold menu-item text-darkBlue transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>

                {/* underline dinâmico */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-2xl border-b-2 border-blue transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>
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
            <a
              href="https://wa.link/jcltng"
              target="_blank"
              rel="noopener noreferrer"
              className="info link-hover flex gap-4 items-center cursor-pointer"
            >
              <div className="icon">
                <Image src="/telefone.svg" alt="icone" width={25} height={25} />
              </div>
              <div className="text-info">
                <h6>Telefone</h6>
                <p>+55 27 99615-1769</p>
              </div>
            </a>
            <a className="info link-hover flex gap-4 items-center cursor-pointer">
              <div className="icon">
                <Image src="/email.svg" alt="icone" width={25} height={25} />
              </div>
              <div className="text-info">
                <h6>Email</h6>
                <p>voltagemservicos.es@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
