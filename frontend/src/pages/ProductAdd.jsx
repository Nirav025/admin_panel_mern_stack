import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct, viewProduct } from "../store/productsSlice";
import { viewCategories } from "../store/categoriesSlice";
import { viewSubcategory } from "../store/subcategoriesSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductAdd() {
  const { register, handleSubmit, reset, watch } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [preview, setPreview] = useState("");

  const categoryList =
    useSelector((state) => state.categories.categoryList) || [];
  const subcategoryList =
    useSelector((state) => state.subcategories.subcategoryList) || [];
  const productList =
    useSelector((state) => state.products.productList) || [];

  const categoryId = watch("category_id");

  const singleProduct = Array.isArray(productList)
    ? productList.find((p) => p._id === productId)
    : null;

  useEffect(() => {
    dispatch(viewCategories());
    dispatch(viewSubcategory());
    dispatch(viewProduct());
  }, [dispatch]);

  useEffect(() => {
    if (singleProduct) {
      reset({
        category_id: singleProduct.category_id?._id,
        subcategory_id: singleProduct.subcategory_id?._id,
        name: singleProduct.p_name,
        price: singleProduct.p_price,
      });

      if (singleProduct.p_image) {
        setPreview(
          `${import.meta.env.VITE_IMAGE_URL}/${singleProduct.p_image}`
        );
      }
    }
  }, [singleProduct, reset]);

  const filteredSubcategory = subcategoryList.filter(
    (s) => s.category_id?._id === categoryId
  );

  const imagePreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (formData) => {
    const fd = new FormData();
    fd.append("category_id", formData.category_id);
    fd.append("subcategory_id", formData.subcategory_id);
    fd.append("p_name", formData.name);
    fd.append("p_price", formData.price);

    if (formData.p_image && formData.p_image[0]) {
      fd.append("p_image", formData.p_image[0]);
    }

    if (!productId) {
      dispatch(addProduct(fd));
      alert("Product Added ✅");
    } else {
      dispatch(updateProduct({ id: productId, data: fd }));
      alert("Product Updated ✅");
      navigate("/viewproduct");
    }

    reset();
    setPreview("");
  };

  return (
    <div>
      <h4>{productId ? "Update Product" : "Add Product"}</h4>

      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Category</label>
          <select {...register("category_id")} className="form-select">
            <option value="">-- choose --</option>
            {categoryList.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Sub Category</label>
          <select {...register("subcategory_id")} className="form-select">
            <option value="">-- choose --</option>
            {filteredSubcategory.map((s) => (
              <option key={s._id} value={s._id}>
                {s.sub_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Product Name</label>
          <input {...register("name")} className="form-control" />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input type="number" {...register("price")} className="form-control" />
        </div>

        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            {...register("p_image")}
            className="form-control"
            onChange={imagePreview}
          />
        </div>

        {preview && (
          <img
            src={preview}
            style={{ width: "120px", borderRadius: "6px" }}
          />
        )}

        <button className="btn btn-primary mt-3">
          {productId ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
