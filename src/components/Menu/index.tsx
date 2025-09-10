"use client";
import { useEffect, useState } from "react";
const sections = ["inicio", "sobre", "serviços", "portfolio", "contato"];

export function Menu() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex gap-8 w-full justify-center items-center py-4 sticky top-0 bg-light shadow z-100">
      <ul className="flex 2xl:gap-8 gap-5">
        {sections.map((item) => (
          <li key={item} className=" relative">
            <a
              href={`#${item}`}
              className="font-semibold menu-item text-blue transition-colors"
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
    </nav>
  );
} 