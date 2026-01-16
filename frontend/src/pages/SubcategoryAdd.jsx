import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addSubcategory, updateSubcategory, viewSubcategory } from '../store/subcategoriesSlice';
import { viewCategories } from '../store/categoriesSlice';
import { useNavigate, useParams } from 'react-router-dom';



export default function SubcategoryAdd() {

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { subcategoryId } = useParams();


  const categoryList = useSelector(state => state.categories.categoryList);
  const subcategoryList = useSelector(state => state.subcategories.subcategoryList);


  if( subcategoryId != null){
      const singlesubcategory = subcategoryList.find(
    (sub) => sub._id === subcategoryId
  );


    useEffect(() => {
    if (singlesubcategory) {
      reset({
        category_id: singlesubcategory.category_id?._id,
        sub_name: singlesubcategory.sub_name
      });
    }
  }, [singlesubcategory, reset]);


  }


  useEffect(() => {
    dispatch(viewCategories());
    dispatch(viewSubcategory());
  }, [dispatch]);



  const onSubmit = (formData) => {

    if (!subcategoryId) {

      dispatch(addSubcategory(formData));
      alert("Subcategory Added...");
      reset();

    } else {

      dispatch(updateSubcategory({
        ...formData,
        _id: subcategoryId
      }));

      alert("Subcategory Updated...");
      reset();
      redirect('/viewsubcategory');
    }
  };






  return (
    <div>
      <h4>Add Sub Category</h4>

      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label className="form-label">Select Category</label>
          <select {...register('category_id', { required: true })} className="form-select">
            <option value="">-- choose --</option>
            {categoryList.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Sub Category Name</label>
          <input {...register('sub_name', { required: true })} className="form-control" />
        </div>

        {
          !subcategoryId
            ? <button className="btn btn-primary col-sm-3">Add SubCategory</button>
            : <button className="btn btn-warning col-sm-3">Update SubCategory</button>
        }

      </form>
    </div>
  );
}
