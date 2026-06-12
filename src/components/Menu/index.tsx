"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
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
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="w-32 h-12 lg:w-40 lg:h-16 2xl:w-48 2xl:h-20 relative flex-shrink-0">
            <Image src="/1732799512-imagem-joellogo-Photoroom.png" alt="logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-8 xl:gap-16">
            <ul className="flex lg:gap-6 2xl:gap-8 gap-5 mt-4 lg:mt-0 flex-shrink-0">
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
          <div className="infos-container hidden lg:flex lg:gap-4 2xl:gap-10 gap-5 items-center mt-4 lg:mt-0">
            <a className="info link-hover flex gap-2 2xl:gap-4 items-center cursor-pointer">
              <div className="icon bg-blue text-white p-1 lg:p-2 rounded-full">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
              </div>
              <div className="text-info text-xs 2xl:text-base whitespace-nowrap">
                <h6 className="hidden 2xl:block">Grande Vitoria - ES</h6>
                <p className="2xl:hidden">Grande Vitoria - ES</p>
                <p className="hidden 2xl:block">Nós avalie</p>
              </div>
            </a>
            <a
              href="https://wa.link/jcltng"
              target="_blank"
              rel="noopener noreferrer"
              className="info link-hover flex gap-2 2xl:gap-4 items-center cursor-pointer"
            >
              <div className="icon bg-blue text-white p-1 lg:p-2 rounded-full">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
              </div>
              <div className="text-info text-xs 2xl:text-base whitespace-nowrap">
                <h6 className="hidden 2xl:block">Telefone</h6>
                <p>+55 27 99615-1769</p>
              </div>
            </a>
            <a className="info link-hover flex gap-2 2xl:gap-4 items-center cursor-pointer">
              <div className="icon bg-blue text-white p-1 lg:p-2 rounded-full">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
              </div>
              <div className="text-info text-[11px] 2xl:text-base whitespace-nowrap">
                <h6 className="hidden 2xl:block">Email</h6>
                <p>Brastenfriorefrigeracao@gmail.com</p>
              </div>
            </a>
          </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
