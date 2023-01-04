import React from "react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.useState;

    fetch();
    console.log(form);
  };

  return (
    <div className="loginForm">
      <h3>Είσοδος</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="myemail@example.com"
          id="email"
          name="email"
          onChange={handleForm}
        />
        <label htmlFor="password">Password</label>
        <span>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            onChange={handleForm}
          />
          <span className="pass-visibility">
            {showPassword ? (
              <AiFillEyeInvisible
                width="16px"
                height="16px"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <AiFillEye
                width="16px"
                height="16px"
                onClick={() => setShowPassword(true)}
              />
            )}
          </span>
        </span>
        <button type="submit">Είσοδος</button>
      </form>
    </div>
  );
}

export default Login;
