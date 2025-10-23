import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useCart } from "@/hook/useCart";
import { toast } from "react-toastify";

export default function ProductShowcase({ PRODUCTS }) {

  const { addToCart, cart, setDrawerOpen } = useCart();

  const handleBuyButton = (product) => {
    addToCart(product)
    toast.success(`${product.name} foi adicionado ao carrinho! 🛒`);
    if (cart.length === 0) {
      setDrawerOpen(true)
    }
  }
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
                <div className="text-lg font-bold">R$ {p.price}</div>
                <div className="flex gap-2">
                  <Button asChild onClick={() => handleBuyButton(p)}>
                    <p
                      className="      
                      px-3 py-2 text-sm rounded-md 
                      bg-gradient-to-r from-[#06b6d4] to-[#60a5fa] 
                      text-slate-900 font-medium
                      transition-all duration-300
                      hover:from-[#0891b2] hover:to-[#3b82f6] 
                      hover:text-white 
                      hover:scale-105
                      cursor: cursor-pointer"
                    >
                      Adicionar ao carrinho
                    </p>
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