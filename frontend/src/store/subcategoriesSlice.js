import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



var subcategories_api = "http://localhost:5000/api/subcategory";



// ADD
export const addSubcategory = createAsyncThunk('/addsubcategory', async (data) => {
  const res = await axios.post(subcategories_api, data);
  return res.data;
});

// VIEW
export const viewSubcategory = createAsyncThunk('/viewsubcategory', async () => {
  const res = await axios.get(subcategories_api);
  return res.data.records;
});

// DELETE
export const deleteSubcategory = createAsyncThunk('/deletesubcategory', async (id) => {
  await axios.delete(`${subcategories_api}/${id}`);
  return { id };
});

// UPDATE
export const updateSubcategory = createAsyncThunk('/updatesubcategory', async (data) => {
  await axios.put(`${subcategories_api}/${data._id}`, data);
  return data;
});

const subcategoriesslice = createSlice({
  name: 'subcategories',
  initialState: {
    subcategoryList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSubcategory.fulfilled, (state, action) => {
        state.subcategoryList.push(action.payload.record);
      })
      .addCase(viewSubcategory.fulfilled, (state, action) => {
        state.subcategoryList = action.payload;
      })
      .addCase(deleteSubcategory.fulfilled, (state, action) => {
        state.subcategoryList = state.subcategoryList.filter(
          (sub) => sub._id !== action.payload.id
        );
      })
      .addCase(updateSubcategory.fulfilled, (state, action) => {
        const index = state.subcategoryList.findIndex(
          (sub) => sub._id === action.payload._id
        );
        if (index !== -1) {
          state.subcategoryList[index] = action.payload;
        }
      });
  }
});

export default subcategoriesslice.reducer;
