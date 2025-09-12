"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  phone: string; // Ex: "5598999999999"
  message?: string;
};

export function WhatsAppButton({ phone, message }: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    message || "Olá, gostaria de mais informações!"
  )}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center 
      w-14 h-14 rounded-full 
      bg-green-500/80 backdrop-blur-md border border-white/20 
      shadow-md hover:shadow-lg hover:bg-green-500 
      transition-all duration-200 ease-out hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 text-white drop-shadow" />
    </Link>
  );
}
