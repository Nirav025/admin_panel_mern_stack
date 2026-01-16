import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {


  const categoryList = useSelector(state => state.categories.categoryList);

  const subcategoryList = useSelector(state => state.subcategories.subcategoryList);

  const productsList = useSelector(state => state.products.productList);

   
  


  const totalInvestment = productsList.reduce((acc, product ) => acc + (Number(product.p_price) || 0), 0);
  

  const cardData = [
    { title: 'Categories', value: categoryList.length, color: 'card-1' },
    { title: 'Sub-Categories', value: subcategoryList.length, color: 'card-2' },
    { title: 'Products', value: productsList.length, color: 'card-3' },
    { title: 'Investment', value: `₹ ${totalInvestment}`, color: 'card-4' },
  ];

  return (
    <div>
      <h3>Dashboard</h3>
      <div className="row g-3 mt-3">

        {cardData.map((c, i) => (
          <div className="col-md-3" key={i}>
            <div className={`p-3 rounded shadow-sm text-white ${c.color}`}>
              <div className="small">{c.title}</div>
              <div className="h3 mt-2">{c.value}</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
