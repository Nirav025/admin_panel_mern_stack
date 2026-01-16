import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const product_api = "http://localhost:5000/api/product";



/* ================= ADD ================= */
export const addProduct = createAsyncThunk("product/add", async (data) => {
  const res = await axios.post(product_api, data);
  return res.data;
});

/* ================= VIEW ================= */
export const viewProduct = createAsyncThunk("product/view", async () => {
  const res = await axios.get(product_api);
  return res.data.records || [];
});

/* ================= DELETE ================= */
export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  const res = await axios.delete(`${product_api}/${id}`);
  return { id };
});

/* ================= UPDATE ================= */
export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ id, data }) => {
    const res = await axios.put(`${product_api}/${id}`, data);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewProduct.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productList.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productList = state.productList.filter(
          (p) => p._id !== action.payload.id
        );
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.productList.findIndex(
          (p) => p._id === action.payload._id
        );
        if (index !== -1) {
          state.productList[index] = action.payload;
        }
      });
  },
});

export default productSlice.reducer;
