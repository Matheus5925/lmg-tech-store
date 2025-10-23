import LocalMallIcon from '@mui/icons-material/LocalMall';
import { IconButton } from '@mui/material';
import { Badge } from 'lucide-react';
import { useState } from 'react';
import { CartDrawer } from './DrawerMenu';
import { useCart } from '@/hook/useCart';

// ----------------------------- Header -----------------------------
export default function Header() {
  const [open, setOpen] = useState(false);
  const { drawerOpen, setDrawerOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#07133a]/95 to-[#03182a]/95 backdrop-blur border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 overflow-hidden">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 min-w-0">
          <img
            src="/assets/img/logo-tech-teen-removebg-preview.png"
            alt="TECHTEEN"
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
          <IconButton onClick={() => setDrawerOpen(true)} size="large" color="inherit">
            <Badge
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#c02c34",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                },
              }}
            >
              <LocalMallIcon />
            </Badge>
          </IconButton>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex-shrink-0">
          <IconButton onClick={() => setDrawerOpen(true)} size="large" color="inherit">
            <Badge
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#c02c34",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                },
              }}
            >
              <LocalMallIcon />
            </Badge>
          </IconButton>
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
          </nav>
        </div>
      )}
      <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </header>
  );
}
