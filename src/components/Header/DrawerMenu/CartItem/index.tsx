import { Box, Typography, IconButton, Select, MenuItem } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <Box
      key={item.id}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fdfdf8",
        borderRadius: 2,
        p: 2,
        gap: 2,
      }}
    >
      {/* Imagem */}
      <Box
        component="img"
        src={item.img}
        alt={item.name}
        sx={{ width: 100, height: 150, objectFit: "cover", borderRadius: 1 }}
      />

      {/* Conteúdo principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          flexGrow: 1,
          position: "relative",
        }}
      >
        {/* Lixeira alinhada ao final (topo direito) */}
        <IconButton
          onClick={() => removeFromCart(item.id)}
          sx={{ position: "absolute", top: 0, right: 0, p: 0.5 }}
        >
          <DeleteOutlineIcon sx={{ color: "#777" }} />
        </IconButton>

        <Typography variant="caption" sx={{ color: "#777", fontWeight: 600 }}>
          {item.name}
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          {item.excerpt}
        </Typography>
        <Select
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
          size="small"
          sx={{ width: 60, height: 35, mt: 0.5 }}
        >
          {[...Array(10).keys()].map((n) => (
            <MenuItem key={n + 1} value={n + 1}>
              {n + 1}
            </MenuItem>
          ))}
        </Select>
        <Typography sx={{ mt: 0.5, fontWeight: 500 }}>
          R$ {item.price}
        </Typography>
      </Box>
    </Box>
  );
}
