import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"; // Include your custom button styles
import Footer from "./Footer";
import Naavbar from "./Navbar";

function Login() {
  return (
    <>
      {/* Navbar */}
      <Naavbar />

      {/* Login Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Login Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <h3 className="mb-4 text-center">Welcome Back!</h3>

            <form>
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

              {/* Remember Me and Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label ms-2" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-primary">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>

              {/* Register Link */}
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link to="/signin" className="text-danger">
                  Register
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

export default Login;
