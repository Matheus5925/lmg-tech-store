import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useCart } from "@/hook/useCart";
import { toast } from "react-toastify";
import { HeicImage } from "@/components/HeicImage"; // <-- importe aqui
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "@mui/icons-material";

export default function ProductShowcase({ PRODUCTS }) {

  const { addToCart, cart, setDrawerOpen } = useCart();

  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyButton = (product) => {
    addToCart(product);
    toast.success(`${product.name} foi adicionado ao carrinho! 🛒`);
    if (cart.length === 0) {
      setDrawerOpen(true);
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  // ✅ FUNÇÃO PARA RENDERIZAR IMG OU HEIC
  const RenderImage = ({ img, alt, className, onClick }) => {
    const isHeic = img.toLowerCase().endsWith(".heic");

    if (isHeic) {
      return <HeicImage src={img} alt={alt} className={className} onClick={onClick} />;
    }

    return <img src={img} alt={alt} className={className} onClick={onClick} />;
  };

  return (
    <>
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
              {/* ---- CAROUSEL NA LISTA ---- */}
              <Carousel className="w-full">
                <CarouselContent>
                  {p.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <RenderImage
                        img={img}
                        alt={p.name}
                        onClick={() => handleOpenModal(p)}
                        className="w-full h-44 object-cover cursor-pointer hover:scale-[1.02] transition-all"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 text-black" />
                <CarouselNext className="right-2 text-black" />
              </Carousel>

              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.excerpt}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold">R$ {p.price.toFixed(2)}</div>
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
                          cursor-pointer
                        "
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

      {/* ---- MODAL COM IMAGENS FULLSCREEN ---- */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-3xl bg-black/90 border-white/10">
          <DialogClose asChild>
            <button className="absolute right-4 top-4 text-white hover:text-gray-300 transition">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
          {selectedProduct && (
            <>
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProduct.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <RenderImage
                        img={img}
                        alt={selectedProduct.name}
                        className="w-full h-[450px] object-contain"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 text-black" />
                <CarouselNext className="right-2 text-black" />
              </Carousel>

              <h2 className="text-slate-300 text-xl font-bold mt-4">{selectedProduct.name}</h2>
              <p className="text-slate-300">{selectedProduct.excerpt}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
