import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container login  ">
      <div>
        <h1>Sign in to your </h1>
        <h1>PopX account</h1>
        <h4>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
        </h4>
      </div>
      <div className="d-flex  mt-4 flex-column ">
        <form action="">
          <div className="form">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form mt-4">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>

          <Link
            to="/signUp"
            class="btn mt-4 "
            style={{
              fontWeight: 600,
              backgroundColor: "rgb(205, 199, 199)",
              color: "white",
              width: "320px",
            }}
            type="button"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
