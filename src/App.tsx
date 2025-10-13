import React from "react";
import { motion } from "framer-motion";
// If you use shadcn/ui in your project, keep these. Otherwise replace Button with a native button.
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react"; // optional icon lib
// Note: ensure you have TailwindCSS + Framer Motion installed and configured.

// ---- Sample data (replace with your real products, testimonials, images) ----
const PRODUCTS = [
  {
    id: "p1",
    name: "LMG Headphones Pro",
    price: "R$ 499",
    excerpt: "Som imersivo, cancelamento de ruído ativo e design premium.",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_784455-MLB90371023249_082025-F-fones-bluetooth-touch-anc-com-tela-de-lcd-e-equalizado-a9.webp",
  },
  {
    id: "p2",
    name: "LMG Wireless Charger",
    price: "R$ 149",
    excerpt: "Carregamento rápido e superfície antiderrapante.",
    img: "https://http2.mlstatic.com/D_NQ_NP_769308-MLB85650949781_062025-O-power-bank-portatil-magsafe-10000mah-pequeno-induco-iphone.webp",
  },
  {
    id: "p3",
    name: "LMG Smartwatch",
    price: "R$ 799",
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
            <ProductShowcase />
          </section>

          <section className="mt-16">
            <Testimonials />
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

// ----------------------------- Header -----------------------------
function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#07133a]/95 to-[#03182a]/95 backdrop-blur border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 overflow-hidden">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 min-w-0">
          <img
            src="/LMG_TECH_Logo_Design-removebg-preview.png"
            alt="LMG Tech"
            className="w-28 sm:w-36 h-auto object-contain max-w-full"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#produtos" className="hover:underline">
            Produtos
          </a>
          <a href="#beneficios" className="hover:underline">
            Benefícios
          </a>
          <a href="#depoimentos" className="hover:underline">
            Depoimentos
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <Button asChild>
            <a
              href="#comprar"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#60a5fa] text-slate-900 font-semibold shadow-md hover:scale-[1.02] transition-transform"
            >
              Compre agora
            </a>
          </Button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <span className="text-2xl leading-none">☰</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#03182a] border-t border-white/10 animate-fadeIn w-full overflow-hidden">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium">
            <a
              href="#produtos"
              className="block hover:underline"
              onClick={() => setOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#beneficios"
              className="block hover:underline"
              onClick={() => setOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className="block hover:underline"
              onClick={() => setOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="block hover:underline"
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
            <Button asChild>
              <a
                href="#comprar"
                className="block text-center px-4 py-2 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#60a5fa] text-slate-900 font-semibold shadow-md"
                onClick={() => setOpen(false)}
              >
                Compre agora
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}



// ----------------------------- Hero -----------------------------
function Hero() {
  return (
    <section className="pt-24 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="inline-block px-3 py-1 rounded-full bg-white/8 text-sm text-[#bde0ff] font-medium">
            Novo na LMG Tech
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Produtos eletrônicos que elevam sua experiência.
          </h1>

          <p className="text-slate-200 max-w-xl">
            Do som imersivo a acessórios inteligentes — qualidade, design e tecnologia em cada detalhe.
            Compre hoje com frete rápido e garantia.
          </p>

          <div className="flex gap-3">
            <Button asChild>
              <a
                href="#produtos"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#60a5fa] text-slate-900 font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Compre agora
              </a>
            </Button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#depoimentos"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-white/10"
            >
              Ver depoimentos
            </motion.a>
          </div>

          <div className="flex gap-4 mt-4">
            <small className="text-slate-300">Frete grátis acima de R$ 299 • 30 dias para devolver</small>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/6">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&q=80"
              alt="Produto destaque"
              className="w-full h-80 object-cover"
            />
          </div>

          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-8 left-6 right-6 bg-gradient-to-r from-white/5 to-white/3 border border-white/6 p-4 rounded-2xl flex items-center gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=120&q=80"
              alt="mini"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="text-sm font-semibold">LMG Headphones Pro</div>
              <div className="text-xs text-slate-300">Som premium • Cancelamento de ruído</div>
            </div>
            <div>
              <span className="text-lg font-bold">R$ 499</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ----------------------------- Benefits -----------------------------
function Benefits() {
  const cards = [
    {
      title: "Qualidade Sonora",
      desc: "Drivers avançados para som nítido e profundo.",
      icon: "🎧",
    },
    {
      title: "Design Premium",
      desc: "Materiais pensados para conforto e durabilidade.",
      icon: "✨",
    },
    {
      title: "Entrega Rápida",
      desc: "Envio em até 48h para principais cidades.",
      icon: "🚚",
    },
  ];

  return (
    <div id="beneficios">
      <h2 className="text-2xl md:text-3xl font-bold">Por que escolher LMG Tech</h2>
      <p className="mt-2 text-slate-300 max-w-2xl">
        Equipamentos e acessórios pensados para entusiastas de tecnologia e profissionais que exigem performance.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white/5 p-5 rounded-2xl border border-white/6"
          >
            <div className="text-3xl">{c.icon}</div>
            <h3 className="mt-3 font-semibold">{c.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------- Products -----------------------------
function ProductShowcase() {
  return (
    <div id="produtos">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Produtos em destaque</h2>
        <a href="#comprar" className="text-sm text-slate-300 hover:underline">
          Ver catálogo
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p, idx) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/6"
          >
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />

            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.excerpt}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-bold">{p.price}</div>
                <div className="flex gap-2">
                  <Button asChild>
                    <a
                      href="#comprar"
                      className="px-3 py-2 text-sm rounded-md bg-gradient-to-r from-[#06b6d4] to-[#60a5fa] text-slate-900 font-medium"
                    >
                      Comprar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

// ----------------------------- Testimonials -----------------------------
function Testimonials() {
  return (
    <div id="depoimentos">
      <h2 className="text-2xl md:text-3xl font-bold">O que nossos clientes dizem</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white/4 p-5 rounded-2xl border border-white/6 flex gap-4 items-start"
          >
            <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
            <figcaption className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-300">Cliente verificado</div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="mt-3 text-slate-200 text-sm">“{t.text}”</blockquote>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}

// ----------------------------- Pricing -----------------------------
function Pricing() {
  return (
    <div id="comprar" className="bg-gradient-to-r from-white/3 to-white/2 p-6 rounded-2xl border border-white/6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Planos simples e diretos</h3>
          <p className="text-slate-300 mt-1">Preços claros, sem surpresas — suporte e garantia inclusos.</p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="text-lg font-bold">A partir de</div>
          <div className="text-3xl font-extrabold">R$ 149</div>
          <Button asChild>
            <a className="px-4 py-2 rounded-md bg-[#06b6d4] text-slate-900 font-semibold" href="#checkout">
              Comprar agora
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------- FAQ -----------------------------
function FAQ() {
  const faqs = [
    {
      q: "Qual o prazo de entrega?",
      a: "Entrega em até 48h para capitais e 3-7 dias úteis para demais regiões, dependendo do CEP.",
    },
    {
      q: "Qual a garantia dos produtos?",
      a: "Garantia de 12 meses para defeitos de fabricação.",
    },
    {
      q: "Como faço a troca ou devolução?",
      a: "Entre em contato pelo suporte ou pelo e-mail suporte@lmgtech.com.br com seu número do pedido.",
    },
  ];

  return (
    <div id="faq" className="mt-6">
      <h2 className="text-2xl md:text-3xl font-bold">Perguntas frequentes</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((f, idx) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white/4 p-4 rounded-lg border border-white/6"
          >
            <div className="font-semibold">{f.q}</div>
            <div className="text-slate-300 mt-2 text-sm">{f.a}</div>
          </motion.div>
        ))}
      </div>
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
