import React, { useState } from "react";
import { motion } from "framer-motion";
// If you use shadcn/ui in your project, keep these. Otherwise replace Button with a native button.
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react"; // optional icon lib
import {
  Box,
  IconButton,
  Badge,
  Button as ButtonMUI,
} from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductShowcase from "./components/ShowCase";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Princing";
import FAQ from "./components/FAQ";
// Note: ensure you have TailwindCSS + Framer Motion installed and configured.

// ---- Sample data (replace with your real products, testimonials, images) ----
const PRODUCTS = [
  {
    id: "p1",
    name: "LMG Headphones Pro",
    price: 499,
    excerpt: "Som imersivo, cancelamento de ruído ativo e design premium.",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_784455-MLB90371023249_082025-F-fones-bluetooth-touch-anc-com-tela-de-lcd-e-equalizado-a9.webp",
  },
  {
    id: "p2",
    name: "LMG Wireless Charger",
    price: 149,
    excerpt: "Carregamento rápido e superfície antiderrapante.",
    img: "https://http2.mlstatic.com/D_NQ_NP_769308-MLB85650949781_062025-O-power-bank-portatil-magsafe-10000mah-pequeno-induco-iphone.webp",
  },
  {
    id: "p3",
    name: "LMG Smartwatch",
    price: 799,
    excerpt: "Monitoramento de saúde, GPS e bateria longa.",
    img: "https://m.media-amazon.com/images/I/415LMgDAgBL._SY350_.jpg",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana P.",
    text: "Comprei os fones LMG e a qualidade do som é surreal. Entrega super rápida!",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "Ótimo atendimento e produto com excelente custo-benefício.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
];

// ----------------------------- Component -----------------------------
export default function LandingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07133a] to-[#03182a] text-slate-50 antialiased">
      <Header />
      <main className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Hero />
          <section className="mt-12">
            <Benefits />
          </section>

          <section className="mt-16">
            <ProductShowcase
              PRODUCTS={PRODUCTS}
            />
          </section>

          <section className="mt-16">
            <Testimonials 
              TESTIMONIALS={TESTIMONIALS}
            />
          </section>

          <section className="mt-16">
            <Pricing />
          </section>

          <section className="mt-16">
            <FAQ />
          </section>

          <section className="mt-16">
            <LeadCapture />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ----------------------------- Lead Capture -----------------------------
function LeadCapture() {
  return (
    <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">Fique por dentro das promoções</h3>
          <p className="text-slate-300 text-sm">
            Cadastre seu e-mail e receba novidades e descontos exclusivos.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Obrigado! Inscrição recebida.");
          }}
          className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
        >
          <input
            type="email"
            placeholder="seu@exemplo.com"
            required
            className="flex-1 px-4 py-2 rounded-md bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <Button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 rounded-md"
          >
            Inscrever
          </Button>
        </form>
      </div>
    </div>
  );
}

// ----------------------------- Footer -----------------------------
function Footer() {
  return (
    <footer className="mt-16 border-t border-white/6 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex flex-col items-start gap-2">
          <img
            src="/LMG_TECH_Logo_Design-removebg-preview.png"
            alt="LMG Tech"
            className="w-28 sm:w-32 md:w-40 object-contain"
          />
          <p className="text-slate-300 text-sm leading-relaxed max-w-xs sm:max-w-sm">
            LMG Tech — soluções e acessórios eletrônicos com design e performance.
            Atendimento e garantia inclusos.
          </p>
        </div>


        <div className="flex gap-8">
          <div>
            <h4 className="font-semibold">Empresa</h4>
            <ul className="mt-2 text-slate-300 text-sm space-y-1">
              <li>Sobre</li>
              <li>Trabalhe conosco</li>
              <li>Política de privacidade</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Suporte</h4>
            <ul className="mt-2 text-slate-300 text-sm space-y-1">
              <li>Ajuda</li>
              <li>Como comprar</li>
              <li>Pedidos e devoluções</li>
            </ul>
          </div>
        </div>

        <div className="ml-auto">
          <h4 className="font-semibold">Siga-nos</h4>
          <div className="flex gap-3 mt-3">
            <a className="w-9 h-9 rounded-full bg-white/6 grid place-items-center">IG</a>
            <a className="w-9 h-9 rounded-full bg-white/6 grid place-items-center">FB</a>
            <a className="w-9 h-9 rounded-full bg-white/6 grid place-items-center">YT</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 py-6 mt-6 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} LMG Tech. Todos os direitos reservados.
      </div>
    </footer>
  );
}
