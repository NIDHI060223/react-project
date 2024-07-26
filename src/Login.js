import React, { useContext, useState } from "react";
import { userLogin } from "./App";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setLogout, setUsername } = useContext(userLogin);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogout(true);
    setUsername(name);
    nav("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="m-4">Login</h3>
        <div className="form-floating  mt-5">
          <input
            type="text"
            className="form-control mx-auto shadow  bg-body rounded"
            id="floatingInput"
            name=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name@example.com"
          />
          <label className="form-label" htmlFor="floatingInput">
            UserName
          </label>
        </div>

        <div class="form-floating mt-4">
          <input
            type="password"
            className="form-control mx-auto shadow bg-body rounded"
            id="floatingPassword"
            placeholder="Password"
            name=""
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="floatingPassword">
            Password
          </label>
        </div>

        <div className="form-button mt-5 mb-3">
          <input
            type="submit"
            className="login btn btn-primary m-3"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
