import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, viewCategories } from "../store/categoriesSlice";
import { FaTrash, FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CategoryView() {

  const categories =
    Array.isArray(useSelector((state) => state.categories.categoryList))
      ? useSelector((state) => state.categories.categoryList)
      : [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewCategories());
  }, [dispatch]);

  function trash(id) {
    if (confirm("Delete category?")) {
      dispatch(deleteCategory(id));
    }
  }

  return (
    <div>
      <h4>Categories</h4>

      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.length > 0 ? (
              categories
                .filter((cat) => cat && cat.name) // 🔥 MAIN FIX
                .map((category, index) => (
                  <tr key={category._id || index}>
                    <td>{index + 1}</td>

                    <td>{category.name}</td>

                    <td>
                      {category.createdAt
                        ? new Date(category.createdAt).toLocaleString()
                        : "-"}
                    </td>

                    <td>
                      {category.updatedAt
                        ? new Date(category.updatedAt).toLocaleString()
                        : "-"}
                    </td>

                    <td>
                      <NavLink
                        to={`/updateCategory/${category._id}`}
                        className="btn btn-sm btn-light me-2"
                      >
                        <FaEdit />
                      </NavLink>

                      <button
                        onClick={() => trash(category._id)}
                        className="btn btn-sm btn-danger"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No categories yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
