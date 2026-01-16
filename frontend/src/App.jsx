import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CategoryAdd from './pages/CategoryAdd';
import CategoryView from './pages/CategoryView';
import Layout from './components/Layout';
import SubcategoryAdd from './pages/SubcategoryAdd';
import SubcategoryView from './pages/SubcategoryView';
import ProductAdd from './pages/ProductAdd';
import ProductView from './pages/ProductView';
import { useDispatch } from 'react-redux';
import { viewCategories } from './store/categoriesSlice';
import { viewSubcategory } from './store/subcategoriesSlice';
import { viewProduct } from './store/productsSlice';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SIgnUp';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';



export default function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewCategories())
    dispatch(viewSubcategory())
    dispatch(viewProduct())
  }, [dispatch])






  return (


    <Routes>

      <Route path="/" element={<Layout />}>




        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />





        {/* ahi private route set kari devu.. */}
        <Route >


          <Route index element={<Dashboard />}></Route>


          <Route path="/addCategory" element={<CategoryAdd />}></Route>
          <Route path="/updateCategory/:categoryId" element={<CategoryAdd />} ></Route>
          <Route path="/viewCategory" element={<CategoryView />} />



          <Route path="/addsubcategory" element={<SubcategoryAdd />} ></Route>
          <Route path="/updatesubcategory/:subcategoryId" element={<SubcategoryAdd />} ></Route>
          <Route path="/viewsubcategory" element={<SubcategoryView />}></Route>


          <Route path="/addproduct" element={<ProductAdd />} ></Route>
          <Route path="/updateproduct/:productId" element={<ProductAdd />} ></Route>
          <Route path="/viewproduct" element={<ProductView />}></Route>
          

        </Route>




      </Route>


    </Routes>

  );
}
