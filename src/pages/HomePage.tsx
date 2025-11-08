import Foodlist from "../components/Foodlist";
import SwiperBanner from "../features/Banner/SwiperBanner";
import SearchBar from "../features/Search/SearchBar";


export const HomePage = () => {
  return (
    <>
      <SwiperBanner />
      <SearchBar />
      <Foodlist />
    </>
  );
};
