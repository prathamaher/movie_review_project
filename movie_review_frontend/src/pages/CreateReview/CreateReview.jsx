import { Link, useLocation, useParams } from "react-router-dom";
import "./CreateReview.css";
import { useState } from "react";

function CreateReview() {
  const { movieTitle } = useParams();
  const { state } = useLocation();

  const movie = state?.movie;

  const [formData, setFormData] = useState({
    rating: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("review submitted successfully!");
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
          <h3 className="text-center mb-4 fw-semibold">
            Create Review for <span>"{movieTitle}"</span>
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="mb-1 fw-medium">First Name</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  className="form-control"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="mb-1 fw-medium">Review</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows={4}
                  placeholder="Write your review..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
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
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateReview;
