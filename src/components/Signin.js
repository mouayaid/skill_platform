import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Naavbar from "./Navbar";

function Signin() {
  return (
    <>
      {/* Navbar */}
      <Naavbar />

      {/* Signin Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Signup Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <h3 className="mb-4 text-center">Create an Account</h3>

            <form>
              {/* Full Name Input */}
              <div className="mb-3">
                <label htmlFor="fullNameInput" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullNameInput"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password Input */}
              <div className="mb-3">
                <label htmlFor="confirmPasswordInput" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPasswordInput"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheckbox"
                />
                <label
                  htmlFor="termsCheckbox"
                  className="form-check-label ms-2"
                >
                  I agree to the terms and conditions
                </label>
              </div>

              {/* Signup Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </div>

              {/* Login Link */}
              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-danger">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Signin;
