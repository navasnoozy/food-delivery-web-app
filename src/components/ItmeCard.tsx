import { Fab } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";

interface Props {
  id?: number;
  imageUrl?: string;
  itemName?: string;
  price?: number;
  restaurantName?: string;
}

const ItemCard = ({ id, imageUrl, itemName, price, restaurantName }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    if (id && price) {
      navigate(`/food/${id}`);
    } else if (restaurantName) {
      navigate(`/restaurant/${restaurantName}`);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id && price) {
      dispatch(
        addToCart({
          id,
          name: itemName || "",
          image: imageUrl?.split("/").pop()?.replace(".png", "") || "",
          price,
          category: "", // You may need to pass this as a prop
          restaurant: { name: restaurantName || "", image: "" },
        } as any)
      );
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 5,
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.02)" },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        sx={{ borderRadius: 5 }}
        component="img"
        alt={itemName || restaurantName}
        height="140"
        image={imageUrl || "/foodImages/foodplaceholder.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ textWrap: "nowrap" }}>
          {itemName || restaurantName}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {price && (
          <Typography sx={{ color: "gray" }} variant="h6">
            ₹{price}
          </Typography>
        )}
        {price && (
          <Fab
            color="secondary"
            aria-label="add"
            variant="extended"
            sx={{ textWrap: "nowrap", fontSize: "12px" }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Fab>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemCard;