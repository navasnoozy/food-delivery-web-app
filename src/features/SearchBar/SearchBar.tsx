import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { searchFoods } from "../../store/slice/foodSlice";
import type { KeyboardEvent } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchFoods(query));
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log('chekcing');
    
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Paper
      sx={{
        m: "20px auto",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "80%",
        borderRadius: 5,
      }}
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search for food, category or restaurant" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyPress} />
      <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
