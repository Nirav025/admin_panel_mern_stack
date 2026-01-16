import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



var categories_api = "http://localhost:5000/api/category";



// ADD
export const addCategory = createAsyncThunk('/addCategories', async (data) => {
  const res = await axios.post(categories_api, data);
  return res.data;
});

// VIEW
export const viewCategories = createAsyncThunk('/viewCategories', async () => {
  const res = await axios.get(categories_api);
  return res.data.records;   // 👈 backend se records aa rahe
});

// DELETE
export const deleteCategory = createAsyncThunk('/deleteCategories', async (id) => {
  const res = await axios.delete(`${categories_api}/${id}`);
  return { id };
});

// UPDATE
export const updateCategory = createAsyncThunk('/updateCategories', async (data) => {
  const res = await axios.put(`${categories_api}/${data._id}`, data);
  return data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoryList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categoryList.push(action.payload.record);
      })
      .addCase(viewCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categoryList = state.categoryList.filter(
          (cat) => cat._id !== action.payload.id
        );
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categoryList.findIndex(
          (cat) => cat._id === action.payload._id
        );
        if (index !== -1) {
          state.categoryList[index] = action.payload;
        }
      });
  }
});

export default categoriesSlice.reducer;
