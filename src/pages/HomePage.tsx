import { Box, Container, Stack } from "@mui/material";
import Foodlist from "../components/Foodlist";
import SwiperBanner from "../features/Banner/SwiperBanner";
import SearchBar from "../features/Search/SearchBar";
import SortComponent from "../features/Sort/SortComponent";
import ScrollingCategories from "../components/Animations/ScrollingCategories";

export const HomePage = () => {
  return (
    <>
      <SwiperBanner />
      <SearchBar />
      <Box>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Stack width="100%"   pr={7}  alignItems="end"><SortComponent /></Stack>
          <Foodlist />
        </Container>
      </Box>
       <ScrollingCategories />
    </>
  );
};

