import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { RootState } from "../store/store";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../store/slice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount, totalItems } = useSelector((state: RootState) => state.cart);
   const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

   if (!isAuthenticated){
        navigate('/signin')
   }

  if (items.length === 0) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <ShoppingCartIcon sx={{ fontSize: 120, color: "grey.400", mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          Your cart is empty
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")} sx={{ mt: 3 }}>
          Browse Food Items
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shopping Cart
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {totalItems} item(s) in your cart
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          {items.map((item) => (
            <Card key={item.id} sx={{ mb: 2, p: 2 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="img"
                  src={`/foodImages/${item.image}.png`}
                  alt={item.name}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/food/${item.id}`)}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/food/${item.id}`)}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.restaurant.name}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ₹{item.price}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        disabled={item.quantity === 1}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ minWidth: 30, textAlign: "center" }}>
                        {item.quantity}
                      </Typography>
                      <IconButton size="small" onClick={() => dispatch(increaseQuantity(item.id))}>
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <IconButton
                      color="error"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      sx={{ ml: "auto" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}

          <Button
            variant="outlined"
            color="error"
            onClick={() => dispatch(clearCart())}
            sx={{ mt: 2 }}
          >
            Clear Cart
          </Button>
        </Box>

        <Card sx={{ height: "fit-content", minWidth: { xs: "100%", md: 300 } }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>₹{totalAmount}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Delivery Fee</Typography>
              <Typography>₹50</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h6" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="primary">
                ₹{totalAmount + 50}
              </Typography>
            </Box>

            <Button variant="contained" fullWidth size="large">
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CartPage;