export interface RestaurantType {
  name: string;
  image: string;
}

export interface FoodItemType {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  restaurant: RestaurantType;
}
