import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials({ TESTIMONIALS }) {
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