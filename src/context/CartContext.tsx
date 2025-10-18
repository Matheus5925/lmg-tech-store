import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [address, setAddress] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("address");
      return saved ? JSON.parse(saved) : [];
    }
    return {
      cep: "",
      logradouro: "",
      complemento: "",
      unidade: "",
      bairro: "",
      localidade: "",
      uf: "",
      numero: 0,
      estado: "",
      regiao: "",
      ibge: "",
      gia: "",
      ddd: "",
      siafi: "",
    };
  });

  // Carregar carrinho salvo no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("address");
    if (saved) setAddress(JSON.parse(saved));
  }, []);

  // Sempre que o carrinho mudar, salvar no localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      // Remove o item se a quantidade for zero ou negativa
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity } : p))
      );
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        drawerOpen,
        setDrawerOpen,
        updateQuantity,
        address,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
