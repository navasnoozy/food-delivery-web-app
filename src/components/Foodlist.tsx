import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { FoodItemType } from "../types/food";
import ItemCard from "./ItmeCard";
import Container from "./Container";

const Foodlist = () => {
  const filteredFood = useSelector((state: RootState) => state.food.filteredFoods);

  return (
    <Container>
      <Grid container spacing={2} maxWidth="xl">
        {filteredFood.map((item: FoodItemType) => (
          <Grid className="////squeen" key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ItemCard id={item.id} imageUrl={`/foodImages/${item.image}.png`} itemName={item.name} price={item.price} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Foodlist;
