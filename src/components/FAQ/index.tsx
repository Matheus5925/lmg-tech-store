import { motion } from "framer-motion";

export default function FAQ() {
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