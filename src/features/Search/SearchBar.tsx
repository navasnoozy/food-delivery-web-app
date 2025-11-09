import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { getAllFoods, searchFoods } from "../../store/slice/foodSlice";
import type { KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowingBorder from "../../components/Animations/GlowingBorder";

const MotionPaper = motion(Paper);
const MotionIconButton = motion(IconButton);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(searchFoods(query));
    }
  };

  const handleClear = () => {
    setQuery("");
    dispatch(getAllFoods());
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={{ margin: "20px auto", width: "80%", maxWidth: "900px" }}>
      <GlowingBorder isActive={true} borderRadius={40} glowColor="#d946ef">
        <MotionPaper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: isFocused ? "0 8px 24px rgba(0, 0, 0, 0.12)" : "0 2px 8px rgba(0, 0, 0, 0.08)",
            border: "2px solid transparent",
            transform: isFocused ? "scale(1.02)" : "scale(1)",
            backgroundColor: "background.paper",
          }}
        >
          <motion.div initial={{ scale: 1 }} animate={{ scale: isFocused ? 1.1 : 1 }} transition={{ duration: 0.2 }} style={{ display: "flex", alignItems: "center", paddingLeft: 8 }}>
            <SearchIcon
              sx={{
                color: isFocused ? "primary.main" : "action.active",
                transition: "color 0.3s ease",
              }}
            />
          </motion.div>

          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              "& input::placeholder": {
                transition: "opacity 0.3s ease",
                opacity: isFocused ? 0.7 : 0.5,
              },
            }}
            placeholder="Search for food, category or restaurant"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <AnimatePresence mode="wait">
            {query && (
              <motion.div
                key="clear-button"
                initial={{ opacity: 0, scale: 0.5, x: -10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  transition: {
                    duration: 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  x: -10,
                  transition: {
                    duration: 0.15,
                    ease: [0.4, 0, 1, 1],
                  },
                }}
              >
                <MotionIconButton
                  onClick={handleClear}
                  size="small"
                  sx={{ p: "8px", mr: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CloseIcon fontSize="small" />
                </MotionIconButton>
              </motion.div>
            )}
          </AnimatePresence>

          <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />

          <MotionIconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
            whileHover={{
              scale: 1.1,
              backgroundColor: "action.hover",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{
                rotate: query ? [0, -10, 10, -10, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <SearchIcon
                sx={{
                  color: query ? "primary.main" : "action.active",
                  transition: "color 0.3s ease",
                }}
              />
            </motion.div>
          </MotionIconButton>
        </MotionPaper>
      </GlowingBorder>
    </div>
  );
};

export default SearchBar;
