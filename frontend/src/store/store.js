import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import subcategoriesReducer from './subcategoriesSlice'
import productsReducer from './productsSlice'



const store = configureStore({



  reducer: {
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    products: productsReducer
  }


});

export default store;
