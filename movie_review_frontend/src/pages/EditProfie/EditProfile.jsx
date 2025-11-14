import { Link } from "react-router-dom";
import "./EditProfile.css";
import { useState } from "react";

function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthday: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Data changed successfully!");
  };

  return (
    <div className="register-page-container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100%",
        }}
      >
        <div
          className="bg-white p-5 pb-4 rounded shadow-lg"
          style={{
            width: "90%",
            maxWidth: "700px",
          }}
        >
          <h3 className="text-center mb-4 fw-semibold">Sign Up</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="mb-1 fw-medium">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="mb-1 fw-medium">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 fw-medium">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 fw-medium">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="+1234567890"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 fw-medium">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    boxShadow: "0px 4px 8px rgba(37,99,235,0.3)",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
