import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              display: "block",
              margin: "10px 0",
              height: "40px",
              borderRadius: "5px",
              width: "400px",
              padding: "20px 10px",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              display: "block",
              margin: "10px 0",
              height: "40px",
              borderRadius: "5px",
              width: "400px",
              padding: "20px 10px",
            }}
          />
          <textarea
            name="message"
            cols="40"
            rows="8"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              display: "block",
              margin: "10px 0",
              borderRadius: "10px",
              width: "400px",
              resize: "none",
              padding: "20px 10px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 25px",
              border: "none",
              outline: "none",
              background: "#000",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
