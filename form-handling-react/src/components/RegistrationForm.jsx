import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const hnadleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Usernmane</label>
        <br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={hnadleChange}
          placeholder="Enter Username"
        />

        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email Address"
          onChange={hnadleChange}
        />

        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={hnadleChange}
          value={formData.password}
          placeholder="Enter Password"
        />

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
