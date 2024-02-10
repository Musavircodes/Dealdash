import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Product[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
