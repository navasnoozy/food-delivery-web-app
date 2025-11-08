import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Grid, Container as MuiContainer } from "@mui/material";
import BannerHeading from "./Components/BannerHeading";

const SwiperBanner = () => {
  const banners = [
    {
      id: 1,
      image: `/banner/1.jpg`,
      text: "Taste Today Special",
    },
    {
      id: 2,
      image: `/banner/fastdelivery.jpg`,
      text: "Fast Delivery",
    },
    {
      id: 3,
      image: `/banner/newlisted.png`,
      text: "New Restaurant Listed",
    },
  ];

  return (
    <MuiContainer maxWidth="xl" sx={{ py: 4 }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        style={{
          paddingBottom: "40px", // Space for pagination dots
        }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.text}
                  sx={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                    borderRadius: 2,
                    height: "300px",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <BannerHeading text={item.text} />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </MuiContainer>
  );
};

export default SwiperBanner;
