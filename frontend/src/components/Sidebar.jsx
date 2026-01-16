import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar bg-white border-end vh-100">
      <div className="p-3">
        <nav className="nav flex-column">
          
          <Link to="/" className="nav-link">Dashboard</Link>

          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#catMenu" role="button" aria-expanded="false">Categories</a>
            <div className="collapse ps-3" id="catMenu">
              <Link to="/addCategory" className="nav-link small">Add</Link>
              <Link to="/viewCategory" className="nav-link small">View</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#subMenu" role="button" aria-expanded="false">Sub Categories</a>
            <div className="collapse ps-3" id="subMenu">
              <Link to="/addsubcategory" className="nav-link small">Add</Link>
              <Link to="/viewsubcategory" className="nav-link small">View</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#prodMenu" role="button" aria-expanded="false">Products</a>
            <div className="collapse ps-3" id="prodMenu">
              <Link to="/addproduct" className="nav-link small">Add</Link>
              <Link to="/viewproduct" className="nav-link small">View</Link>
            </div>
          </div>



          {/* <Link to="/signup" className="nav-link small">Sign Up</Link> */}

       

        </nav>
      </div>
    </div>
  );
}
