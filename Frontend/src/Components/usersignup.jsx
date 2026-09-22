import { useState } from "react";

function UserSignup() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("User created successfully!");

        setFormData({
          id: "",
          name: "",
          email: ""
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to backend");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>User ID</label>
        <input
          type="number"
          name="id"
          placeholder="Enter your ID"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default UserSignup;