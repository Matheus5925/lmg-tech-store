import { motion } from "framer-motion";

export default function Benefits() {
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
      <h2 className="text-2xl md:text-3xl font-bold">Por que escolher TECHTEEN</h2>
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
