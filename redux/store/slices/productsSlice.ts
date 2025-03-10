import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  _id: string;
  name: string;
  image: string;  
  categoryId: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Fetch products from API
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("/api/products");
  return response.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export default productsSlice.reducer;
