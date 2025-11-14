import "./UserReviews.css";

function UserReviewItem({ review }) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">
          {review.title}
          <span className="rating">{review.rating}/10</span>
        </h5>
        <p
          className="card-text"
          style={{ fontSize: "14px", lineHeight: "12px", color: "#707070ff" }}
        >
          Reviewed by: <span>{review.reviewer}</span>
        </p>
        <p
          className="card-text"
          style={{ fontSize: "14px", lineHeight: "6px" }}
        >
          {review.description}
        </p>
        <p
          className="card-text"
          style={{ color: "#9e9999", fontSize: "12px", lineHeight: "6px" }}
        >
          Last Updated : <span>{review.modified}</span>
        </p>
        <div className="list-group list-group-horizontal">
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-success me-2">Share</button>
          <button className="btn btn-danger me-2">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default UserReviewItem;
