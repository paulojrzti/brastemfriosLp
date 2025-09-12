"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components";

const faqs = [
  {
    question:
      "Quais serviços de elétrica a Voltagem oferece na Grande Vitória?",
    answer:
      "Oferecemos instalação elétrica, manutenção, reparos em sistemas residenciais e comerciais, além de projetos industriais completos em Vila Velha, Vitória, Cariacica, Serra e toda a região metropolitana da Grande Vitória.",
  },
  {
    question: "Vocês realizam manutenção e instalação de ar-condicionado?",
    answer:
      "Sim! Atendemos ar-condicionado split, janela e sistemas comerciais, com limpeza, manutenção preventiva e reparos rápidos em todas as cidades da Grande Vitória.",
  },
  {
    question: "Atendem empresas e residências?",
    answer:
      "Sim, prestamos serviços de elétrica e refrigeração para residências, comércios e indústrias em Vila Velha, Vitória, Cariacica, Serra e região metropolitana.",
  },
  {
    question: "Quanto tempo leva para realizar um orçamento?",
    answer:
      "Nosso atendimento é rápido! Em até 24 horas um técnico avalia seu projeto e fornece orçamento detalhado sem compromisso em qualquer cidade da Grande Vitória.",
  },
  {
    question: "Quais tipos de ar-condicionado vocês instalam?",
    answer:
      "Instalamos ar-condicionado split, janela, portátil e sistemas comerciais de grande porte, garantindo segurança e eficiência em Vila Velha, Vitória, Cariacica e Serra.",
  },
  {
    question:
      "Vocês fazem manutenção preventiva em equipamentos de refrigeração?",
    answer:
      "Sim! Fazemos limpeza, verificação de componentes e ajustes para garantir maior durabilidade e eficiência energética em toda a Grande Vitória.",
  },
  {
    question: "Vocês trabalham com projetos elétricos industriais?",
    answer:
      "Sim! Desenvolvemos projetos industriais, instalações de alta performance e adequação de infraestrutura elétrica para empresas em Vila Velha, Vitória, Cariacica e Serra.",
  },
  {
    question: "O serviço de elétrica inclui reparos emergenciais?",
    answer:
      "Sim, atendemos reparos urgentes para residências e empresas, garantindo segurança e rapidez em todas as cidades da Grande Vitória.",
  },
  {
    question: "Quanto tempo dura um serviço de manutenção de ar-condicionado?",
    answer:
      "Normalmente de 1 a 3 horas, dependendo do equipamento e tamanho do sistema, em qualquer cidade da região metropolitana da Grande Vitória.",
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer:
      "Sim, todos os nossos serviços possuem garantia, garantindo tranquilidade e confiança aos clientes de Vila Velha, Vitória, Cariacica, Serra e região.",
  },
  {
    question: "Quais cuidados devo ter após a manutenção?",
    answer:
      "Orientamos sobre limpeza periódica, uso correto e prevenção de sobrecarga elétrica ou desgaste do equipamento para prolongar a vida útil em toda a Grande Vitória.",
  },
  {
    question: "Como faço para agendar visita técnica?",
    answer:
      "Entre em contato pelo telefone, WhatsApp ou formulário; nossa equipe agenda rapidamente de acordo com sua disponibilidade em Vila Velha, Vitória, Cariacica, Serra e regiões próximas.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-20">
      <Container>
        <h2 className="title-section mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 
                         rounded-2xl shadow-lg p-6 text-left cursor-pointer 
                         hover:shadow-blue/30 transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue">
                  {faq.question}
                </h3>
                <span className="text-xl text-orange">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key={`faq-${index}`} // 🔑 chave única pra cada resposta
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-darkBlue">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
