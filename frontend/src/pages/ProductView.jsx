import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, viewProduct } from "../store/productsSlice";
import { NavLink } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function ProductView() {
  const dispatch = useDispatch();
  const productList =
    useSelector((state) => state.products.productList) || [];

  useEffect(() => {
    dispatch(viewProduct());
  }, [dispatch]);

  const trash = (id) => {
    if (confirm("Delete Product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div>
      <h4>Products</h4>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {productList.map((p, i) => (
            <tr key={p._id}>
              <td>{i + 1}</td>
              <td>{p.category_id?.name}</td>
              <td>{p.subcategory_id?.sub_name}</td>
              <td>{p.p_name}</td>
              <td>₹ {p.p_price}</td>
              <td>
                {p.p_image && (
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${p.p_image}`}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                )}
              </td>
              <td>
                <NavLink
                  to={`/updateProduct/${p._id}`}
                  className="btn btn-sm btn-light me-2"
                >
                  <FaEdit />
                </NavLink>
                <button
                  onClick={() => trash(p._id)}
                  className="btn btn-sm btn-danger"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {productList.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center">
                No Products
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
