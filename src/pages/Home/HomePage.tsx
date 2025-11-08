import Foodlist from "../../components/Foodlist";
import Banner from "../../features/Banner/SwiperBanner";
import SearchBar from "../../features/SearchBar/SearchBar";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <SearchBar />
      <Foodlist />
    </>
  );
};
