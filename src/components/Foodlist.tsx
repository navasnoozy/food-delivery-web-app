import { Grid, Box, Pagination, PaginationItem } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router";
import type { RootState } from "../store/store";
import type { FoodItemType } from "../types/food";
import ItemCard from "./ItmeCard";
import Container from "./Container";

const Foodlist = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const filteredFood = useSelector((state: RootState) => state.food.filteredFoods);

  // Calculate items per page based on grid layout (2 rows)
  // xs: 1 item per row = 2, sm: 2 per row = 4, md: 3 per row = 6, lg: 4 per row = 8
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredFood.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredFood.slice(startIndex, endIndex);

  return (
    <Container>
      <Grid container spacing={2} maxWidth="xl">
        {currentItems.map((item: FoodItemType) => (
          <Grid className="////squeen" key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ItemCard id={item.id} imageUrl={`/foodImages/${item.image}.png`} itemName={item.name} price={item.price} />
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            page={page}
            count={totalPages}
            color="primary"
            size="large"
            renderItem={(item) => <PaginationItem component={Link} to={item.page === 1 ? "" : `?page=${item.page}`} {...item} />}
          />
        </Box>
      )}
    </Container>
  );
};

export default Foodlist;
