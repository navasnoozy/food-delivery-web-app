import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Card, CardMedia, Container, Grid, Typography, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { RootState } from "../store/store";
import { addToCart } from "../store/slice/cartSlice";
import ItemCard from "../components/ItmeCard";


const FoodPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const food = useSelector((state: RootState) =>
    state.food.allFoods.find((item) => item.id === Number(id))
  );

  const relatedFoods = useSelector((state: RootState) =>
    state.food.allFoods.filter(
      (item) => item.restaurant.name === food?.restaurant.name && item.id !== Number(id)
    )
  );

  if (!food) {
    return (
      <Container>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 4 }}>
          Food item not found
        </Typography>
      </Container>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(food));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Back
      </Button>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card>
            <CardMedia
              component="img"
              image={`/foodImages/${food.image}.png`}
              alt={food.name}
              sx={{ height: 400, objectFit: "cover" }}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {food.name}
            </Typography>

            <Chip label={food.category} color="primary" sx={{ mb: 2 }} />

            <Typography variant="h4" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
              ₹{food.price}
            </Typography>

            <Card sx={{ mb: 3, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Restaurant
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
                onClick={() => navigate(`/restaurant/${food.restaurant.name}`)}
              >
                <img
                  src={`/restaurants/${food.restaurant.image}.png`}
                  alt={food.restaurant.name}
                  style={{ width: 60, height: 60, borderRadius: "8px", objectFit: "cover" }}
                />
                <Typography variant="h6" color="primary">
                  {food.restaurant.name}
                </Typography>
              </Box>
            </Card>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleAddToCart}
              sx={{ py: 2 }}
            >
              Add to Cart - ₹{food.price}
            </Button>
          </Box>
        </Grid>
      </Grid>

      {relatedFoods.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            More from {food.restaurant.name}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {relatedFoods.slice(0, 4).map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <ItemCard
                  id={item.id}
                  imageUrl={`/foodImages/${item.image}.png`}
                  itemName={item.name}
                  price={item.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default FoodPage;