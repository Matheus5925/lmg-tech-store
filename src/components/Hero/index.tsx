
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Hero() {
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
            Novo na TECHTEEN Store!
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
              <div className="text-sm font-semibold">TECHTEEN</div>
              <div className="text-xs text-slate-300">Melhor qualidade • Atendimento personalizado</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}