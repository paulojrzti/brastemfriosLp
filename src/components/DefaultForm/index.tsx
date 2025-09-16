"use client";

import { useState } from "react";
import { FormButton } from "../FormButton";

export function DefaultForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // 👉 Aqui você decide se vai usar API própria, Formspree ou EmailJS
    await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: { "Content-Type": "application/json" },
    });

    alert("Sua mensagem foi enviada com sucesso!");
    form.reset();
    setLoading(false);
  };

  return (
    <form
      action="https://formspree.io/f/xblavgrg"
      method="POST"
      className="flex flex-col gap-3 w-full max-w-xs 
  rounded-xl bg-white/10 backdrop-blur-sm 
  border border-white/20 p-5"
      onSubmit={() => alert("Sua mensagem foi enviada com sucesso!")}
    >
      <h4
        className="relative inline-block font-bold text-white w-max
    after:content-[''] after:block after:w-full after:h-[2px] after:bg-orange 
    after:mx-auto after:mt-1 text-xl mb-3 after:rounded-full after:left-0"
      >
        Fale conosco
      </h4>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        className="glass-input"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="glass-input"
        required
      />
      <input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        className="glass-input"
        required
      />

      <FormButton size="sm">Enviar</FormButton>
    </form>
  );
}
