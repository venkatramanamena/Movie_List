import React, { useState } from "react";

const Venkat = () => {
  const [name, setName] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
//   const { email, username, password, confirmpassword } = name;
  const ChangeHandler = (e) => {

    setName({ ...name, [e.target.name]:e.target.value  });
  };
  const Submit = e => {
    e.preventDefault();
    if(name.password!==name.confirmpassword)
    {
alert("please enter equal to cnf psswd")
    }
    else{
        console.log(name);
    setName({ username: "", email: "", password: "", confirmpassword: "" });
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          textAlign: "center",
        }}
        onSubmit={Submit}
      >
        <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          value={name.username}
          onChange={ChangeHandler}
        />
        </div>
        <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={name.email}
          onChange={ChangeHandler}
        />
        </div>
        <div className="form-group">
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          required
          value={name.password}
          onChange={ChangeHandler}
        />
        </div>
        <div className="form-group">
        <label htmlFor="confirmpassword">confirmpassword:</label>
        <input
          type="password"
          name="confirmpassword"
          required
          value={name.confirmpassword}
          onChange={ ChangeHandler}
        />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Venkat;
