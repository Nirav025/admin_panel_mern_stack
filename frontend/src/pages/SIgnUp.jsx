import React from "react";
import { useForm } from "react-hook-form";
import "../assets/style.css";
import { NavLink } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();



   
  


  return (

    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>

        <form  className="signup-form">
          {/* Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={`form-input ${errors.name ? "error" : ""}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`form-input ${errors.email ? "error" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`form-input ${errors.password ? "error" : ""}`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>

         

          <button type="submit" className="btn-primary">
            Sign Up
          </button>

          <p className="login-link">
            Already have an account? <NavLink to={'/signin'} >Sign in</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
