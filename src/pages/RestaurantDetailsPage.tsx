import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { RootState } from "../store/store";
import ItemCard from "../components/ItmeCard";


const RestaurantDetailsPage = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const restaurant = useSelector((state: RootState) =>
    state.food.restaurants.find((r) => r.name === name)
  );

  const restaurantFoods = useSelector((state: RootState) =>
    state.food.allFoods.filter((item) => item.restaurant.name === name)
  );

  if (!restaurant) {
    return (
      <Container>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 4 }}>
          Restaurant not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Back
      </Button>

      <Card sx={{ mb: 4 }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={`/restaurants/${restaurant.image}.png`}
            alt={restaurant.name}
            sx={{ height: 300, objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              p: 3,
            }}
          >
            <Typography variant="h3" fontWeight="bold" color="white">
              {restaurant.name}
            </Typography>
          </Box>
        </Box>
      </Card>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Menu
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {restaurantFoods.length} items available
        </Typography>
      </Box>

      {restaurantFoods.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", py: 4 }}>
          No items available from this restaurant
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {restaurantFoods.map((item) => (
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
      )}
    </Container>
  );
};

export default RestaurantDetailsPage;