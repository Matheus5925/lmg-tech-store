import { Button } from "../ui/button";

export default function Pricing() {
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