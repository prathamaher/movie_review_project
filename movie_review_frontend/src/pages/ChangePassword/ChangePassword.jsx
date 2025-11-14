import "./ChangePassword.css";
import { useState } from "react";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Password changed successfully!");
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
          <h3 className="text-center mb-4 fw-semibold">Change Password</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3">
                <label className="mb-1 fw-medium">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="currentPassword"
                  placeholder="Enter password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 fw-medium">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  placeholder="Enter password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 fw-medium">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmNewPassword"
                  placeholder="Enter password again..."
                  value={formData.confirmNewPassword}
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
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
