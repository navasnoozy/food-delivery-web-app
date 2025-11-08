import { Grid } from "@mui/material";
import Container from "../../components/Container";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import ItemCard from "../../components/ItmeCard";
import type { RestaurantType } from "../../types/food";

const RestaurantPage = () => {
  const restaurants = useSelector((state: RootState) => state.food.restaurants);

  return (
    <Container>
      <Grid container spacing={2} maxWidth="xl">
        {restaurants.map((item: RestaurantType) => (
          <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ItemCard
              imageUrl={`/restaurants/${item.image}.png`}
              itemName={item.name}
            />
          </Grid>
        ))}
      </Grid> s
    </Container>
  );
};

export default RestaurantPage;
