import React, { useContext, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useCart } from "../../../hook/useCart";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export function CartDrawer({ drawerOpen, setDrawerOpen }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const handleCheckout = () => {
    // Seu número de WhatsApp no formato internacional (ex: 55 para Brasil)
    const phoneNumber = "5511983082634"; // <-- coloque o seu número aqui (sem + ou traços)

    // Monta a mensagem com os itens do carrinho
    const message = [
      "🛒 *Pedido via site TECHTEEN Store*",
      "",
      ...cart.map(
        (item) =>
          `• *${item.name}* — ${item.quantity}x — R$ ${item.price.toFixed(2)}`
      ),
      "",
      `💰 *Total:* R$ ${cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)}`,
      "",
      "👉 Por favor, confirme o endereço de entrega e a forma de pagamento.",
    ].join("\n");

    // Cria o link com encode para caracteres especiais
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Fecha o Drawer e abre o WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const subtotal = cart.reduce((acc, item) => {
    const priceNumber = item.price
    return acc + priceNumber * item.quantity;
  }, 0);

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{ sx: { width: 350, p: 2 } }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <IconButton onClick={() => setDrawerOpen(false)}>
          <Close sx={{ width: 30, height: 30, color: "#555" }} />
        </IconButton>
        <Typography variant="h5" sx={{ ml: 1, fontWeight: 600 }}>
          Carrinho
        </Typography>
      </Box>
      <Divider />

      {cart.length === 0 ? (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Seu carrinho está vazio.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "80%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {cart.map((item) => (
              <CartItem
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                key={item.id}
              />
            ))}
          </Box>

          <Paper
            component="section"
            elevation={3}
            sx={{
              boxShadow: "0 -4px 20px -5px rgba(10, 10, 10, 0.1)",
              py: 3,
              backgroundColor: "white",
            }}
          >
            <Container maxWidth="sm">
              <Typography
                variant="h6"
                component="h3"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Resumo da compra
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography>Subtotal</Typography>
                <Typography>
                  R$ {subtotal.toFixed(2).replace(".", ",")}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography fontWeight="bold">Total</Typography>
                <Typography fontWeight="bold">
                  R$ {subtotal.toFixed(2).replace(".", ",")}
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={() => {
                  setDrawerOpen(false);
                  handleCheckout()
                  clearCart()
                }}
                sx={{
                  mt: 3,
                  backgroundColor: "#a62a0f",
                  "&:hover": { backgroundColor: "#8c220c" },
                }}
                fullWidth
              >
                Finalizar Compra via WhatsApp
              </Button>
            </Container>
          </Paper>
        </Box>
      )}
    </Drawer>
  );
}
