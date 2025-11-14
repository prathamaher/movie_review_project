import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      // Assuming API returns: { id, name, role, token }
      login(data); // store in context + localStorage

      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page-container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="card shadow" style={{ width: "400px" }}>
          <div className="card-header bg-secondary text-white text-center">
            <h5 className="m-0">Login</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <AiOutlineMail />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <RiLockPasswordLine />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                onClick={handleLogin}
                type="submit"
                className="btn btn-success w-100"
              >
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <small>
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Sign up!
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
