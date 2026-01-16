import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSubcategory, viewSubcategory } from "../store/subcategoriesSlice";
import { FaTrash, FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SubcategoryView() {

  const subcategoryList =
    Array.isArray(useSelector(state => state.subcategories.subcategoryList))
      ? useSelector(state => state.subcategories.subcategoryList)
      : [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewSubcategory());
  }, [dispatch]);

  function trash(id) {
    if (confirm("Delete Subcategory?")) {
      dispatch(deleteSubcategory(id));
    }
  }

  return (
    <div>
      <h4>Sub Categories</h4>

      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {subcategoryList.length > 0 ? (
              subcategoryList
                .filter(
                  (sub) =>
                    sub &&
                    sub.sub_name &&
                    sub.category_id // 🔥 MAIN FIX
                )
                .map((sub, index) => (
                  <tr key={sub._id || index}>
                    <td>{index + 1}</td>

                    <td>{sub.category_id?.name || "-"}</td>

                    <td>{sub.sub_name}</td>

                    <td>
                      {sub.createdAt
                        ? new Date(sub.createdAt).toLocaleString()
                        : "-"}
                    </td>

                    <td>
                      {sub.updatedAt
                        ? new Date(sub.updatedAt).toLocaleString()
                        : "-"}
                    </td>

                    <td>
                      <NavLink
                        to={`/updateSubcategory/${sub._id}`}
                        className="btn btn-sm btn-light me-2"
                      >
                        <FaEdit />
                      </NavLink>

                      <button
                        onClick={() => trash(sub._id)}
                        className="btn btn-sm btn-danger"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No subcategories yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
