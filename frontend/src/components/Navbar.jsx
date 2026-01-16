import React, { useEffect, useState } from 'react';
import { deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

import { FaSignInAlt } from 'react-icons/fa';






export default function Navbar({ userPlaceholder = 'Please SignUp/SignIn' }) {

  






  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Admin Panel</a>
        <div className="d-flex align-items-center ms-auto">
          
          {/* <div className="me-3 text-muted small">Welcome</div> */}

          {/* <div className="user-placeholder px-3 py-1 border rounded"> {userPlaceholder  }</div> */}

          {/* <button className='btn bg-dark text-white text-center m-1'> <FaSignInAlt/> </button> */}

        </div>
      </div>
    </nav>
  );
}
