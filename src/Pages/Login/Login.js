import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {signInUsingGoogle, processLogin} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  return (
    <div className="container my-5 w-25">
      <h1 className="my-5">Login</h1>
      <div className="form-floating mb-3">
        <input
          type="email"
          onBlur={handleEmail}
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          onBlur={handlePassword}
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button
        type="button"
        onClick={() => processLogin(email, password)}
        className="btn btn-danger btn-lg w-100 mt-4"
      >
        Login
      </button>
      <h4 className="mt-3">OR</h4>
      <button
        type="button"
        onClick={signInUsingGoogle}
        className="btn btn-danger btn-lg w-100 my-4"
      >
        Google Sign In
      </button>
      <NavLink to="/register" className="create-account text-danger">
        Don't have any account ?
      </NavLink>
    </div>
  );
};

export default Login;
