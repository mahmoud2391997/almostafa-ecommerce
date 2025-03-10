import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Category {
  _id: string;
  name: string;
  image: string;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

// Fetch categories from API
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await fetch("/api/categories");
  return response.json();
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load categories";
      });
  },
});

export default categoriesSlice.reducer;
