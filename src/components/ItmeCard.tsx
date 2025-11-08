import { Fab } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  imageUrl?: string; // now expects a full path (e.g., "/foodImages/appamwithstew.png")
  itemName?: string;
  price?: number;
  restaurantName?: string;
}

const ItemCard = ({ imageUrl, itemName, price, restaurantName }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
      <CardMedia sx={{ borderRadius: 5 }} component="img" alt={itemName || restaurantName} height="140" image={imageUrl || "/foodImages/foodplaceholder.png"} />
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
          <Fab color="secondary" aria-label="add" variant="extended" sx={{ textWrap: "nowrap", fontSize: "12px" }}>
            Add To Cart
          </Fab>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
