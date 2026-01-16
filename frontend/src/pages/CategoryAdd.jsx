import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, updateCategory, viewCategories } from '../store/categoriesSlice';
import { useNavigate, useParams } from 'react-router-dom';



function CategoryAdd() {


  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { categoryId } = useParams();



  const categoryList = useSelector(state => state.categories.categoryList);



  if (categoryId  != null) {

    const singleCategory = categoryList.find(
      (category) => category._id === categoryId
    );

    useEffect(() => {


      if (singleCategory) {
        reset(singleCategory);
      }
    }, [categoryId, reset]);

  }




  useEffect(() => {
    dispatch(viewCategories());
  }, [dispatch]);











  function SubmitData(formData) {

    if (!categoryId) {

      dispatch(addCategory(formData));
      alert("Category Added...");
      reset();

    } else {

      dispatch(updateCategory({
        ...formData,
        _id: categoryId
      }));

      alert("Category Updated...");
      reset();
      redirect('/viewCategory');
    }
  }





  return (
    <div>
      <h4>Add Category</h4>

      <form className="mt-3" onSubmit={handleSubmit(SubmitData)}>

        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            {...register('name', { required: true })}
            className="form-control"
          />
        </div>

        {
          !categoryId
            ? <button className="btn btn-primary col-sm-3">Add Category</button>
            : <button className="btn btn-warning col-sm-3">Update</button>
        }

      </form>
    </div>
  );
}

export default CategoryAdd;
