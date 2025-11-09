import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";



const ScrollingCategories = () => {
  const allFoods = useSelector((state: RootState) => state.food.allFoods);
  const categories = [...new Set(allFoods.map((item) => item.category))];

  // Duplicate categories for seamless loop
  const duplicatedCategories = [...categories, ...categories, ...categories];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: 6,
        bgcolor: "background.paper",
        position: "relative",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "200px",
          zIndex: 2,
          pointerEvents: "none",
        },
        "&::before": {
          left: 0,
          background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
        },
        "&::after": {
          right: 0,
          background: "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
        },
      }}
    >
      <motion.div
        animate={{
          x: [0, -100 * categories.length],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          gap: "48px",
          whiteSpace: "nowrap",
        }}
      >
        {duplicatedCategories.map((category, index) => (
          <motion.div
            key={`${category}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              opacity: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "gray",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                userSelect: "none",
              }}
            >
              {category}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default ScrollingCategories;